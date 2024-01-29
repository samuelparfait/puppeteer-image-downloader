import fs from 'node:fs';
import chalk from 'chalk';

const log = console.log;
const success = chalk.green;
const warning = chalk.yellow;

export function upsertOutDir(outdir: string) {
  try {
    if (!fs.existsSync(outdir)) {
      fs.mkdirSync(`src/${outdir}`);
      log(success(`Created ${outdir} directory in the 'src' folder.`));
    }
  } catch (e) {
    if (e instanceof Error && e.message.includes('EEXIST')) {
      log(warning(`--> ${outdir}`));
    }
  }
}
