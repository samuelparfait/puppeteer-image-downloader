import puppeteer from 'puppeteer';
import fs from 'fs';
import chalk from 'chalk';

import { upsertOutDir } from '@/utils';

const log = console.log;
const success = chalk.green;

const baseUrl = 'https://www.vercel.com';
const outDir = 'images';

(async () => {
  await upsertOutDir(outDir);

  log(success('Processing...'));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(baseUrl, { waitUntil: 'networkidle0' });

  let counter = 0;
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
    log(success(matches));
    if (matches && matches.length === 2) {
      const extension = matches[1];
      const buffer = await response.buffer();
      fs.writeFileSync(
        `src/${outDir}/image-${counter}.${extension}`,
        buffer,
        'base64'
      );
      counter += 1;
    }
  });

  await page.goto(baseUrl);

  await browser.close();

  log(success('Done!'));
})();
