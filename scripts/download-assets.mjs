import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_URL = 'https://workos.com/';
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(dest);
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(dest);
      reject(err);
    });
  });
};

async function main() {
  console.log('Starting WorkOS asset download...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to', TARGET_URL);
  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await new Promise(r => setTimeout(r, 5000));

  // Extract all images
  console.log('Extracting images...');
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt || '',
      width: img.naturalWidth,
      height: img.naturalHeight
    })).filter(img => img.src && !img.src.startsWith('data:'));
  });

  console.log(`Found ${images.length} images`);

  // Extract all SVGs
  console.log('Extracting SVGs...');
  const svgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('svg')).map((svg, i) => ({
      id: i,
      viewBox: svg.getAttribute('viewBox') || '',
      width: svg.getAttribute('width') || '',
      height: svg.getAttribute('height') || '',
      outerHTML: svg.outerHTML,
      innerHTML: svg.innerHTML,
      classes: svg.className?.toString() || ''
    }));
  });

  console.log(`Found ${svgs.length} SVGs`);

  // Extract favicons
  const favicons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]')).map(link => ({
      href: link.href,
      rel: link.rel
    }));
  });

  console.log(`Found ${favicons.length} favicons`);

  await browser.close();

  // Download images
  const imagesDir = path.join(__dirname, '../public/images');
  const seoDir = path.join(__dirname, '../public/seo');
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.mkdirSync(seoDir, { recursive: true });

  console.log('\nDownloading images...');
  const uniqueImages = [...new Set(images.map(img => img.src))];
  let downloaded = 0;
  let failed = 0;

  // Download in batches of 4
  for (let i = 0; i < uniqueImages.length; i += 4) {
    const batch = uniqueImages.slice(i, i + 4);
    await Promise.all(batch.map(async (src) => {
      try {
        const url = new URL(src);
        let filename = path.basename(url.pathname);
        if (!filename || filename === '/') {
          filename = `image-${Date.now()}.png`;
        }
        // Clean filename
        filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
        const dest = path.join(imagesDir, filename);
        await downloadFile(src, dest);
        downloaded++;
        if (downloaded % 20 === 0) {
          console.log(`Downloaded ${downloaded}/${uniqueImages.length} images`);
        }
      } catch (e) {
        failed++;
      }
    }));
  }

  console.log(`Downloaded ${downloaded} images, ${failed} failed`);

  // Download favicons
  console.log('\nDownloading favicons...');
  for (const favicon of favicons) {
    try {
      const url = new URL(favicon.href);
      let filename = path.basename(url.pathname);
      if (!filename) filename = 'favicon.ico';
      await downloadFile(favicon.href, path.join(seoDir, filename));
      console.log(`Downloaded favicon: ${filename}`);
    } catch (e) {
      console.log(`Failed to download favicon: ${favicon.href}`);
    }
  }

  // Generate icons.tsx
  console.log('\nGenerating icons.tsx...');
  const iconsContent = generateIconsFile(svgs);
  fs.writeFileSync(path.join(__dirname, '../src/components/icons.tsx'), iconsContent);
  console.log('Generated icons.tsx');

  // Save SVG data for reference
  fs.writeFileSync(
    path.join(__dirname, '../docs/research/SVGS.json'),
    JSON.stringify(svgs, null, 2)
  );

  console.log('\nAsset download complete!');
}

function generateIconsFile(svgs) {
  // Group and deduplicate SVGs by content
  const uniqueSvgs = new Map();
  svgs.forEach((svg, i) => {
    const key = svg.innerHTML.slice(0, 100);
    if (!uniqueSvgs.has(key)) {
      uniqueSvgs.set(key, { ...svg, id: i });
    }
  });

  const icons = Array.from(uniqueSvgs.values()).slice(0, 50); // Limit to 50 most unique

  return `// WorkOS Icons
// Auto-generated from https://workos.com/

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

${icons.map((svg, i) => {
  const name = guessIconName(svg);
  const width = svg.width || '24';
  const height = svg.height || '24';
  const viewBox = svg.viewBox || `0 0 ${width} ${height}`;

  // Clean up the inner HTML for React
  const cleanInnerHTML = svg.innerHTML
    .replace(/class="[^"]*"/g, '')
    .replace(/fill="[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
    .replace(/\s+/g, ' ')
    .trim();

  return `export const ${name} = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="${width}"
      height="${height}"
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      ${cleanInnerHTML}
    </svg>
  )
);
${name}.displayName = "${name}";`;
}).join('\n\n')}

// Logo Component
export const WorkOSLogo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <text x="0" y="18" fontSize="18" fontWeight="500" fill="currentColor">WorkOS</text>
    </svg>
  )
);
WorkOSLogo.displayName = "WorkOSLogo";
`;
}

function guessIconName(svg) {
  const classes = svg.classes.toLowerCase();

  if (classes.includes('arrow') || classes.includes('chevron')) {
    if (classes.includes('right')) return 'ArrowRightIcon';
    if (classes.includes('left')) return 'ArrowLeftIcon';
    if (classes.includes('down')) return 'ArrowDownIcon';
    if (classes.includes('up')) return 'ArrowUpIcon';
    return 'ArrowIcon';
  }
  if (classes.includes('check')) return 'CheckIcon';
  if (classes.includes('close') || classes.includes('x')) return 'CloseIcon';
  if (classes.includes('menu') || classes.includes('hamburger')) return 'MenuIcon';
  if (classes.includes('search')) return 'SearchIcon';
  if (classes.includes('user')) return 'UserIcon';
  if (classes.includes('lock')) return 'LockIcon';
  if (classes.includes('github')) return 'GithubIcon';
  if (classes.includes('twitter') || classes.includes('x-')) return 'TwitterIcon';
  if (classes.includes('linkedin')) return 'LinkedInIcon';
  if (classes.includes('external')) return 'ExternalLinkIcon';
  if (classes.includes('play')) return 'PlayIcon';

  // Default naming
  return `Icon${svg.id}`;
}

main().catch(console.error);
