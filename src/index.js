import parser from './parsers.js';
import { getFixturePath } from './utils.js';
import differences from './differences.js';
import formater from './formatters/index.js';

const gendiff = (filepath1, filepath2, fileType = 'stylish') => {
  const obj1 = parser(getFixturePath(filepath1));
  const obj2 = parser(getFixturePath(filepath2));
  if (!obj1 || !obj2) {
    console.error('Error: One of the files could not be parsed.');
    return null;
  }
  const diff = differences(obj1, obj2);
  return formater(diff, fileType);
};

export default gendiff;
