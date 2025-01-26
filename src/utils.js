import fs from 'fs';
import path from 'path';

const readFile = (filename) => {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error.message);
    return null;
  }
};

const getFixturePath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);

export { readFile, getFixturePath };
