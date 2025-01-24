import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function parser(filePath) {
  try {
    const readFile = (filename) => fs.readFileSync(filename, 'utf-8');
    const fileExtension = path.extname(filePath);

    switch (fileExtension) {
      case '.json':
        return JSON.parse(readFile(filePath));
      case '.yml':
      case '.yaml':
        return yaml.load(readFile(filePath));
      default:
        console.log('Error: current extensions are not supported.');
        return null;
    }
  } catch (error) {
    console.log('Error reading or parsing the file:', error);
    return null;
  }
}

export default parser;
