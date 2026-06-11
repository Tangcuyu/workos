import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_URL = 'https://workos.com/';
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function main() {
  console.log('Starting WorkOS website extraction...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1440,900'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Set timeout
  page.setDefaultTimeout(120000);

  console.log('Navigating to', TARGET_URL);
  try {
    await page.goto(TARGET_URL, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    console.log('Page loaded (DOM content loaded)');

    // Wait for additional content
    await page.waitForSelector('body', { timeout: 10000 });
    await new Promise(r => setTimeout(r, 5000)); // Wait 5 seconds for JS to execute
    console.log('Additional wait complete');
  } catch (e) {
    console.log('Navigation issue:', e.message);
    console.log('Continuing with whatever loaded...');
  }

  // Take full page screenshot
  console.log('Taking desktop screenshot...');
  try {
    await page.screenshot({
      path: path.join(__dirname, '../docs/design-references/workos-desktop-1440.png'),
      fullPage: true
    });
    console.log('Desktop screenshot saved');
  } catch (e) {
    console.log('Screenshot error:', e.message);
  }

  // Take mobile screenshot
  console.log('Taking mobile screenshot...');
  try {
    await page.setViewport({ width: 390, height: 844 });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: path.join(__dirname, '../docs/design-references/workos-mobile-390.png'),
      fullPage: true
    });
    console.log('Mobile screenshot saved');
  } catch (e) {
    console.log('Mobile screenshot error:', e.message);
  }

  // Reset to desktop
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise(r => setTimeout(r, 1000));

  // Extract design tokens
  console.log('Extracting design tokens...');
  const designTokens = await page.evaluate(() => {
    const getComputedColor = (el) => window.getComputedStyle(el).color;
    const getComputedBg = (el) => window.getComputedStyle(el).backgroundColor;
    const getComputedFont = (el) => ({
      family: window.getComputedStyle(el).fontFamily,
      size: window.getComputedStyle(el).fontSize,
      weight: window.getComputedStyle(el).fontWeight,
      lineHeight: window.getComputedStyle(el).lineHeight,
      letterSpacing: window.getComputedStyle(el).letterSpacing
    });

    // Get all colors used on the page
    const allElements = document.querySelectorAll('*');
    const colors = new Set();
    const bgColors = new Set();
    const fonts = new Set();

    allElements.forEach(el => {
      try {
        const color = getComputedColor(el);
        const bg = getComputedBg(el);
        const font = window.getComputedStyle(el).fontFamily;
        if (color && color !== 'rgba(0, 0, 0, 0)') colors.add(color);
        if (bg && bg !== 'rgba(0, 0, 0, 0)') bgColors.add(bg);
        if (font) fonts.add(font);
      } catch (e) {}
    });

    // Get key elements
    const body = document.body;
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    const p = document.querySelector('p');
    const button = document.querySelector('button, a[role="button"], .button, [class*="btn"]');
    const links = document.querySelectorAll('a');
    const firstLink = links[0];

    return {
      bodyStyles: {
        bg: getComputedBg(body),
        color: getComputedColor(body),
        font: getComputedFont(body)
      },
      h1Styles: h1 ? getComputedFont(h1) : null,
      h2Styles: h2 ? getComputedFont(h2) : null,
      h3Styles: h3 ? getComputedFont(h3) : null,
      pStyles: p ? getComputedFont(p) : null,
      buttonStyles: button ? {
        font: getComputedFont(button),
        bg: getComputedBg(button),
        color: getComputedColor(button),
        padding: window.getComputedStyle(button).padding,
        borderRadius: window.getComputedStyle(button).borderRadius
      } : null,
      linkStyles: firstLink ? {
        font: getComputedFont(firstLink),
        color: getComputedColor(firstLink)
      } : null,
      allColors: Array.from(colors),
      allBgColors: Array.from(bgColors),
      allFonts: Array.from(fonts)
    };
  });

  // Extract fonts from link tags
  const fonts = await page.evaluate(() => {
    const fontLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .filter(link => link.href.includes('fonts.googleapis.com') || link.href.includes('fonts'))
      .map(link => link.href);

    const webfontScripts = Array.from(document.querySelectorAll('script'))
      .filter(script => script.src && (script.src.includes('webfont') || script.src.includes('fonts')))
      .map(script => script.src);

    return { fontLinks, webfontScripts };
  });

  // Extract favicons
  const favicons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]'))
      .map(link => ({
        rel: link.rel,
        href: link.href,
        sizes: link.sizes?.toString(),
        type: link.type
      }));
  });

  // Extract meta tags
  const metaTags = await page.evaluate(() => {
    const getMeta = (name) => {
      const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      return meta ? meta.content : null;
    };
    return {
      title: document.title,
      description: getMeta('description'),
      ogTitle: getMeta('og:title'),
      ogDescription: getMeta('og:description'),
      ogImage: getMeta('og:image'),
      twitterCard: getMeta('twitter:card'),
      themeColor: getMeta('theme-color')
    };
  });

  // Extract page topology
  console.log('Extracting page topology...');
  const pageTopology = await page.evaluate(() => {
    const sections = [];

    // Find all major sections
    const mainElements = document.querySelectorAll('header, nav, main, section, footer, [role="banner"], [role="main"], [role="contentinfo"]');

    mainElements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      sections.push({
        index: i,
        tag: el.tagName.toLowerCase(),
        id: el.id,
        classes: el.className?.toString().split(' ').slice(0, 5).join(' '),
        position: styles.position,
        top: rect.top + window.scrollY,
        height: rect.height,
        zIndex: styles.zIndex,
        text: el.textContent?.trim().slice(0, 200)
      });
    });

    // Also look for div-based sections
    const divSections = document.querySelectorAll('div[class*="section"], div[class*="hero"], div[class*="feature"], div[class*="footer"], div[class*="header"], div[class*="nav"]');
    divSections.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      sections.push({
        index: mainElements.length + i,
        tag: 'div',
        id: el.id,
        classes: el.className?.toString().split(' ').slice(0, 5).join(' '),
        position: styles.position,
        top: rect.top + window.scrollY,
        height: rect.height,
        zIndex: styles.zIndex,
        text: el.textContent?.trim().slice(0, 100)
      });
    });

    return sections.sort((a, b) => a.top - b.top);
  });

  // Extract images
  console.log('Extracting images...');
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      loading: img.loading,
      classes: img.className?.toString().split(' ').slice(0, 3).join(' ')
    }));
  });

  // Extract SVGs
  console.log('Extracting SVGs...');
  const svgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('svg')).map((svg, i) => ({
      index: i,
      viewBox: svg.getAttribute('viewBox'),
      width: svg.getAttribute('width'),
      height: svg.getAttribute('height'),
      classes: svg.className?.toString().split(' ').slice(0, 3).join(' '),
      innerHTML: svg.innerHTML.slice(0, 500),
      outerHTML: svg.outerHTML.slice(0, 2000)
    }));
  });

  // Extract navigation structure
  console.log('Extracting navigation...');
  const navigation = await page.evaluate(() => {
    const navs = document.querySelectorAll('nav, header, [role="navigation"]');
    return Array.from(navs).map(nav => {
      const links = nav.querySelectorAll('a');
      return {
        tag: nav.tagName.toLowerCase(),
        classes: nav.className?.toString().split(' ').slice(0, 5).join(' '),
        links: Array.from(links).slice(0, 15).map(link => ({
          text: link.textContent?.trim(),
          href: link.href,
          classes: link.className?.toString().split(' ').slice(0, 3).join(' ')
        }))
      };
    });
  });

  // Extract full page HTML structure
  console.log('Extracting page structure...');
  const pageStructure = await page.evaluate(() => {
    // Get the full body HTML for analysis
    return {
      bodyClasses: document.body.className,
      htmlStructure: document.body.innerHTML.slice(0, 50000)
    };
  });

  // Check for animations and interactions
  console.log('Checking for animations...');
  const animations = await page.evaluate(() => {
    const animatedElements = document.querySelectorAll('[class*="animate"], [class*="transition"], [data-aos], [data-animate]');
    const animations = [];

    // Check for animation libraries
    const hasAOS = !!document.querySelector('[data-aos]');
    const hasGSAP = typeof window.gsap !== 'undefined';
    const hasFramerMotion = !!document.querySelector('[data-framer-component-type]');
    const hasLenis = !!document.querySelector('.lenis') || typeof window.lenis !== 'undefined';

    return {
      animatedElements: animatedElements.length,
      hasAOS,
      hasGSAP,
      hasFramerMotion,
      hasLenis,
      animationClasses: Array.from(animatedElements).slice(0, 10).map(el => el.className?.toString())
    };
  });

  // Save all extracted data
  const researchDir = path.join(__dirname, '../docs/research');

  const extractedData = {
    url: TARGET_URL,
    timestamp: new Date().toISOString(),
    designTokens,
    fonts,
    favicons,
    metaTags,
    pageTopology,
    images,
    svgs,
    navigation,
    pageStructure,
    animations
  };

  fs.writeFileSync(
    path.join(researchDir, 'EXTRACTED_DATA.json'),
    JSON.stringify(extractedData, null, 2)
  );

  fs.writeFileSync(
    path.join(researchDir, 'DESIGN_TOKENS.md'),
    `# WorkOS Design Tokens

## Colors

### Background Colors
${designTokens.allBgColors.map(c => `- \`${c}\``).join('\n')}

### Text Colors
${designTokens.allColors.map(c => `- \`${c}\``).join('\n')}

## Typography

### Body
- Font: ${designTokens.bodyStyles.font.family}
- Size: ${designTokens.bodyStyles.font.size}
- Weight: ${designTokens.bodyStyles.font.weight}
- Line Height: ${designTokens.bodyStyles.font.lineHeight}

### H1
${designTokens.h1Styles ? `- Font: ${designTokens.h1Styles.family}
- Size: ${designTokens.h1Styles.size}
- Weight: ${designTokens.h1Styles.weight}` : 'Not found'}

### H2
${designTokens.h2Styles ? `- Font: ${designTokens.h2Styles.family}
- Size: ${designTokens.h2Styles.size}
- Weight: ${designTokens.h2Styles.weight}` : 'Not found'}

### H3
${designTokens.h3Styles ? `- Font: ${designTokens.h3Styles.family}
- Size: ${designTokens.h3Styles.size}
- Weight: ${designTokens.h3Styles.weight}` : 'Not found'}

## Buttons
${designTokens.buttonStyles ? `- Font: ${designTokens.buttonStyles.font.family}
- Size: ${designTokens.buttonStyles.font.size}
- Weight: ${designTokens.buttonStyles.font.weight}
- Background: ${designTokens.buttonStyles.bg}
- Color: ${designTokens.buttonStyles.color}
- Padding: ${designTokens.buttonStyles.padding}
- Border Radius: ${designTokens.buttonStyles.borderRadius}` : 'Not found'}

## Fonts Used
${designTokens.allFonts.map(f => `- ${f}`).join('\n')}

## External Font Links
${fonts.fontLinks.map(l => `- ${l}`).join('\n')}
`
  );

  fs.writeFileSync(
    path.join(researchDir, 'PAGE_TOPOLOGY.md'),
    `# WorkOS Page Topology

## Page Sections (in order)

${pageTopology.map((s, i) => `
### ${i + 1}. ${s.tag}${s.id ? `#${s.id}` : ''}${s.classes ? `.${s.classes}` : ''}
- Position: ${s.position}
- Top: ${Math.round(s.top)}px
- Height: ${Math.round(s.height)}px
- Z-Index: ${s.zIndex}
- Preview: ${s.text?.slice(0, 100) || 'N/A'}
`).join('\n')}

## Navigation
${navigation.map((nav, i) => `
### Nav ${i + 1}: ${nav.tag}.${nav.classes}
Links:
${nav.links.map(l => `- ${l.text} → ${l.href}`).join('\n')}
`).join('\n')}

## Animations Detected
- Animated Elements: ${animations.animatedElements}
- AOS: ${animations.hasAOS ? 'Yes' : 'No'}
- GSAP: ${animations.hasGSAP ? 'Yes' : 'No'}
- Framer Motion: ${animations.hasFramerMotion ? 'Yes' : 'No'}
- Lenis (Smooth Scroll): ${animations.hasLenis ? 'Yes' : 'No'}
`
  );

  // Save SVGs to a separate file
  fs.writeFileSync(
    path.join(researchDir, 'SVGS.md'),
    `# WorkOS SVGs

${svgs.map((svg, i) => `
## SVG ${i + 1}
\`\`\`html
${svg.outerHTML}
\`\`\`
`).join('\n')}
`
  );

  console.log('\nExtraction complete!');
  console.log('- Screenshots saved to docs/design-references/');
  console.log('- Design tokens saved to docs/research/DESIGN_TOKENS.md');
  console.log('- Page topology saved to docs/research/PAGE_TOPOLOGY.md');
  console.log('- SVGs saved to docs/research/SVGS.md');
  console.log('- Full data saved to docs/research/EXTRACTED_DATA.json');
  console.log(`- Found ${images.length} images`);
  console.log(`- Found ${svgs.length} SVGs`);

  await browser.close();
}

main().catch(console.error);
