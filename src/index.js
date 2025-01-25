// import { fileURLToPath } from 'url';
import path from 'path';
import parser from './parsers.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const getFixturePath = (filepath) => path.resolve('..', '.', process.cwd(), '..', '.', '__fixtures__', filepath);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getPatch = (filepath1, filepath2, fileType = 'stylish') => {
  const obj1 = parser(getFixturePath(filepath1));
  const obj2 = parser(getFixturePath(filepath2));
  if (!obj1 || !obj2) {
    console.error('Error: One of the files could not be parsed.');
    return null;
  }
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default getPatch;
