#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/getPatch.js';

const program = new Command();
program
  .usage('[options] <filepath1> <filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });
// Формат данных определяйте на основе расширения файла

program.parse();
