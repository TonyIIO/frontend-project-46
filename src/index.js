import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

const readFile = (filepath) => parser(fs.readFileSync(getFixturePath(filepath), 'utf-8'), filepath);

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const obj1 = readFile(filepath1);
  const obj2 = readFile(filepath2);
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
