import * as fs from 'fs';

function parseJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.log('Error reading or parsing the file:');
  }
  return null;
}

export default parseJson;
