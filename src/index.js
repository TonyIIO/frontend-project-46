import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepatch) => fs.readFileSync(filepatch, 'utf-8');

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const filePatch1 = getFullPath(filepath1);
  const filePatch2 = getFullPath(filepath2);
  const obj1 = parser(getData(filePatch1), filePatch1);
  const obj2 = parser(getData(filePatch2), filePatch2);
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
