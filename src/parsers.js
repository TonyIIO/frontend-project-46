import path from 'path';
import yaml from 'js-yaml';

function parser(dataFile, patchName) {
  const fileExtension = path.extname(patchName);
  switch (fileExtension) {
    case '.json':
      return JSON.parse(dataFile);
    case '.yml':
    case '.yaml':
      return yaml.load(dataFile);
    default:
      console.log('Error: current extensions are not supported.');
      return null;
  }
}

export default parser;
