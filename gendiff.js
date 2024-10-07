import { Command } from "commander";
import { readFileSync } from 'node:fs';
import readlineSync from 'readline-sync';



const program = new Command();
program
// .argument('[options] <filepath1> <filepath2>')
.usage('[options] <filepath1> <filepath2>')
.version('0.0.1', '-V, --version', 'output the version number')
.option('-f, --format [type]', 'output format')
.description('Compares two configuration files and shows a difference.')
.action((name, options, command) => {
  if (options.debug) {
    console.error('Called %s with options %o', command.name(), options);
  }
  const title = options.title ? `${options.title} ` : '';
  console.log(`Thank-you ${title}${name}`);
});
  program.parse();
  const filepath1 = readlineSync.question(`specify the path to the file 1`);
  const filepath2 = readlineSync.question(`specify the path to the file 2`);
  const genDiff = (filepath1, filepath2) => {
    const filepath1 = fs.readFileSync(filepath1);
    const filepath2 = fs.readFileSync(filepath2);
    const filepath1Parse = JSON.parse(filepath1);
    const filepath2Parse = JSON.parse(filepath2);
  }
  //readFileSync('<directory>');
  const diff = genDiff(filepath1, filepath2);
  console.log(diff);

  export default diff;