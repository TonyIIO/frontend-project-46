import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const getFixturePath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);

const readFile = (filename) => parser(fs.readFileSync(getFixturePath(filename), ('utf-8')), filename);

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const obj1 = readFile(filepath1);
  const obj2 = readFile(filepath2);
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
