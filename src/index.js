import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const getFixturePath = (filepath) => path.resolve(process.cwd(), '..', '__fixtures__', filepath);

const readFile = (filepath) => parser(fs.readFileSync(getFixturePath(filepath), ('utf-8')), filepath);

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const obj1 = readFile(filepath1);
  const obj2 = readFile(filepath2);
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
