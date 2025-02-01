import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepath) => fs.readFileSync(filepath, 'utf-8');

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const filePath1 = getFullPath(filepath1);
  const filePath2 = getFullPath(filepath2);
  const obj1 = parser(getData(filePath1), filePath1);
  const obj2 = parser(getData(filePath2), filePath2);
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
