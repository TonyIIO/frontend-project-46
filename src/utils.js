import fs from 'fs';

const readFile = (filename) => {
  try {
    return fs.readFileSync(filename, 'utf-8');
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error.message);
    return null;
  }
};

export default readFile;
