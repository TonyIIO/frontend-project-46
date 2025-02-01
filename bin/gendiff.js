#!/usr/bin/env node

import { Command } from 'commander';

import gendiff from '../src/index.js';

const program = new Command();
const defaultFile1 = '__fixtures__/file1.json';
const defaultFile2 = '__fixtures__/file2.json';

program
  .name('gendiff')
  .helpOption('-h, --help', 'output usage information')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish', 'plain', 'json')
  .action((filepath1 = defaultFile1, filepath2 = defaultFile2) => {
    const options = program.opts();
    console.log(gendiff(filepath1, filepath2, options.format));
  });
program.parse(process.argv);
