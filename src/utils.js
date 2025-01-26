import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readFile = (filename) => {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error.message);
    return null;
  }
};

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// const getFixturePath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);

export { readFile, getFixturePath };
