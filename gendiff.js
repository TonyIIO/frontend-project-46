import { Command } from "commander";
const program = new Command();
program.version('0.0.1', '-V, --version', 'output the version number');
program.description('Compares two configuration files and shows a difference.');

  program.parse();

