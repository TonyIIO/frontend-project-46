#!/usr/bin/env node
import { Command } from 'commander';
import getPatch from '../src/index.js';

const program = new Command();
program
  .usage('[options] <filepath1> <filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const fileType = options.format;
    console.log(getPatch(filepath1, filepath2, fileType));
  });

program.parse();
