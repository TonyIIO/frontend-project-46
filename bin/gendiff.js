#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish', 'plain', 'json')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(gendiff(filepath1, filepath2, options.format));
  });
program.parse(process.argv);
// program
//   .usage('[options] <filepath1> <filepath2>')
//   .version('0.0.1', '-V, --version', 'output the version number')
//   .option('-f, --format [type]', 'output format', 'stylish', 'plain', 'json')
//   .description('Compares two configuration files and shows a difference.')
//   .arguments('<filepath1> <filepath2>')
//   .action((filepath1, filepath2) => {
//     const options = program.opts();
//     console.log(gendiff(filepath1, filepath2, options.format));
//   });

// program.parse(process.argv);
