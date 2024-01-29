import fs from 'node:fs';
import chalk from 'chalk';

const log = console.log;
const success = chalk.green;
const warning = chalk.yellow;

export async function upsertOutDir(outDir: string) {
  const pathname = `src/${outDir}`;

  if (!fs.existsSync(pathname)) {
    fs.mkdirSync(pathname);
    log(success(`${outDir} directory created at ${pathname}.`));
  }
  log(warning(`--> ${pathname}`));
}
