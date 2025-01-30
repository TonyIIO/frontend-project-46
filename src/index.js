import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const getFullPath = (filepath) => path.resolve(__dirname, '..', '__fixtures__', filepath);
const getFullPath = (filepath) => (path.isAbsolute(filepath)
  ? filepath : path.resolve(__dirname, '..', '__fixtures__', filepath));

// const readFile = (filepath) => {
//   const fullPath = getFixturePath(filepath);
//   if (!fs.existsSync(fullPath)) {
//     throw new Error(`File not found: ${fullPath}`);
//   }
//   return parser(fs.readFileSync(fullPath, 'utf-8'), filepath);
// };
// const readFile = (filepath) => {
//   const absoluteFilePath = path.isAbsolute(filepath)
//     ? filepath : path.resolve(process.cwd(), filepath);
//   const data = fs.readFileSync(absoluteFilePath, 'utf-8');
//   return parser(data, filepath);
// };
//   return parser(getData, filepath);

// const getFullPath = (filepatch) => path.resolve(process.cwd(), filepatch);
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
