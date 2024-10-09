#!/usr/bin/env node
import * as fs from 'fs';
import { Command } from "commander";
import _ from 'lodash';

const program = new Command();
program
.usage('[options] <filepath1> <filepath2>')
.version('0.0.1', '-V, --version', 'output the version number')
.option('-f, --format [type]', 'output format')
.description('Compares two configuration files and shows a difference.')
program.parse();

const genDiff = (filepath1, filepath2) => {
  const readFile1 = fs.readFileSync(filepath1, 'utf-8');
  const readFile2 = fs.readFileSync(filepath2, 'utf-8');
  const obj1 = JSON.parse(readFile1);
  const obj2 = JSON.parse(readFile2);
  const getDiff = (obj1, obj2) => {
    const keys =_.union(Object.keys({...obj1, ...obj2})).sort()
     const result = {}
      for (const key of keys) {
      if(obj2[key] === undefined) result[key] = `- ${key}: ${obj1[key]}`
      else if(obj1[key] === undefined) result[key] = `+ ${key}: ${obj2[key]}`
      else if (obj1[key] === obj2[key]) result[key] = `${key}: ${obj1[key]}`
      else if (obj1[key] !== obj2[key]) result[key] = `- ${key}: ${obj1[key]}`//,` + ${key}: ${obj2[key]}` - не срабатывает нужно добавить еще один вывод с новым значением в обекте 2.
      }
    return result
  }
    return getDiff(obj1, obj2);
  }; 

  console.log(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'));

  export default genDiff;
  