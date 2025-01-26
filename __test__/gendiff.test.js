import { fileURLToPath } from 'url';
import path from 'path';
import readFile from '../src/utils.js';
import getPatch from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readInfo = (filename) => (readFile(getFixturePath(filename), 'utf-8'));

test('output json in stylish mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json');
  const expected = readInfo('result1.txt');
  expect(result).toEqual(expected);
});

test('output yaml in stylish mode with nesting', () => {
  const result = getPatch('file3.yaml', 'file4.yaml');
  const expected = readInfo('result1.txt');
  expect(result).toEqual(expected);
});

test('output json in plain mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json', 'plain');
  const expected = readInfo('result2.txt');
  expect(result).toEqual(expected);
});

test('output yaml in plain mode with nesting', () => {
  const result = getPatch('file3.yaml', 'file4.yaml', 'plain');
  const expected = readInfo('result2.txt');
  expect(result).toEqual(expected);
});

test('output json in json mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json', 'json');
  const expected = readInfo('result3.txt');
  expect(result).toEqual(expected);
});

test('output yaml in json mode with nesting', () => {
  const result = getPatch('file3.yaml', 'file4.yaml', 'json');
  const expected = readInfo('result3.txt');
  expect(result).toEqual(expected);
});

test('incorrect file format and wrong file path', () => {
  const result = getPatch('fileNoExist.json', 'result1s.txt');
  expect(result).toBeNull();
});

// test.each([
//   ['output json in stylish mode with nesting',
//  'file3.json', 'file4.json', 'result1.txt', undefined],
//   ['output yaml in stylish mode with nesting',
//  'file3.yaml', 'file4.yaml', 'result1.txt', undefined],
//   ['output json in plain mode with nesting', 'file3.json', 'file4.json', 'result2.txt', 'plain'],
//   ['output yaml in plain mode with nesting', 'file3.yaml', 'file4.yaml', 'result2.txt', 'plain'],
//   ['output json in json mode with nesting', 'file3.json', 'file4.json', 'result3.txt', 'json'],
//   ['output yaml in json mode with nesting', 'file3.yaml', 'file4.yaml', 'result3.txt', 'json'],
//   ['incorrect file format and wrong file path',
//  'fileNoExist.json', 'result1s.txt', null, undefined],
// ])('%s', (testName, file1, file2, expectedFile, format) => {
//   if (expectedFile === null) {
//     const result = getPatch(file1, file2);
//     expect(result).toBeNull();
//   } else {
//     const result = format ? getPatch(file1, file2, format) : getPatch(file1, file2);
//     const expected = readInfo(expectedFile);
//     expect(result).toEqual(expected);
//   }
// });
