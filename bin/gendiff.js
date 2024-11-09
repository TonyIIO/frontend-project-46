#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .usage('[options] <filepath1> <filepath2>')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.');

program.parse();
