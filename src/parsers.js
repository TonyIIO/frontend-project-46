import path from 'path';
import yaml from 'js-yaml';
import readFile from './utils.js';

function parser(filePath) {
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
}

export default parser;
