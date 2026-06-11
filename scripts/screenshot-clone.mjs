import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function main() {
  console.log('Taking screenshot of clone...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for content to render
  await new Promise(r => setTimeout(r, 2000));

  // Take full page screenshot
  await page.screenshot({
    path: path.join(__dirname, '../docs/design-references/clone-desktop-1440.png'),
    fullPage: true
  });
  console.log('Saved clone-desktop-1440.png');

  // Take mobile screenshot
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(__dirname, '../docs/design-references/clone-mobile-390.png'),
    fullPage: true
  });
  console.log('Saved clone-mobile-390.png');

  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
