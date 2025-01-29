import { readFile, getFixturePath } from '../src/utils.js';
import getPatch from '../src/index.js';

const readInfo = (filename) => (readFile(getFixturePath(filename), 'utf-8'));

test.each([
  ['output json in stylish mode with nesting', 'file1.json', 'file2.json', 'result1.txt', undefined],
  ['output yaml in stylish mode with nesting', 'file1.yml', 'file2.yml', 'result1.txt', undefined],
  ['output json in plain mode with nesting', 'file1.json', 'file2.json', 'result2.txt', 'plain'],
  ['output yaml in plain mode with nesting', 'file1.yml', 'file2.yml', 'result2.txt', 'plain'],
  ['output json in json mode with nesting', 'file1.json', 'file2.json', 'result3.txt', 'json'],
  ['output yaml in json mode with nesting', 'file1.yml', 'file2.yml', 'result3.txt', 'json'],
  ['incorrect file format and wrong file path', 'fileNoExist.json', 'result1s.txt', null, undefined],
])('%s', (testName, file1, file2, expectedFile, format) => {
  if (expectedFile === null) {
    const result = getPatch(file1, file2);
    expect(result).toBeNull();
  } else {
    const result = format ? getPatch(file1, file2, format) : getPatch(file1, file2);
    const expected = readInfo(expectedFile);
    expect(result).toEqual(expected);
  }
});
