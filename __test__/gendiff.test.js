import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import getPatch from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => (fs.readFileSync(getFixturePath(filename), 'utf-8'));

test('output json and yaml in stylish mode', () => {
  const result = getPatch('file1.json', 'file2.json');
  const expected = readFile('result1s.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file1.yaml', 'file2.yaml');
  expect(result1).toEqual(expected);
});

test('output json and yaml in stylish mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json');
  const expected = readFile('result2s.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file3.yaml', 'file4.yaml');
  expect(result1).toEqual(expected);
});

test('output json and yaml in plain mode', () => {
  const result = getPatch('file1.json', 'file2.json', 'plain');
  const expected = readFile('result3p.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file1.yaml', 'file2.yaml', 'plain');
  expect(result1).toEqual(expected);
});

test('output json and yaml in plain mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json', 'plain');
  const expected = readFile('result4p.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file3.yaml', 'file4.yaml', 'plain');
  expect(result1).toEqual(expected);
});

test('output json and yaml in json mode', () => {
  const result = getPatch('file1.json', 'file2.json', 'json');
  const expected = readFile('result5j.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file1.yaml', 'file2.yaml', 'json');
  expect(result1).toEqual(expected);
});

test('output json and yaml in json mode with nesting', () => {
  const result = getPatch('file3.json', 'file4.json', 'json');
  const expected = readFile('result6j.txt');
  expect(result).toEqual(expected);

  const result1 = getPatch('file3.yaml', 'file4.yaml', 'json');
  expect(result1).toEqual(expected);
});

test('incorrect file format and wrong file path', () => {
  const result = getPatch('fileNoExist.json', 'result1s.txt');
  expect(result).toBeNull();
});

// const testCases = [
  //   ['output json and yaml in stylish mode', 'file1.json', 'file2.json', 'result1s.txt'],
  //   ['output json and yaml in stylish mode', 'file1.yaml', 'file2.yaml', 'result1s.txt'],
  //   ['output json and yaml in stylish mode with nesting', 'file3.json', 'file4.json', 'result2s.txt'],
  //   ['output json and yaml in stylish mode with nesting', 'file3.yaml', 'file4.yaml', 'result2s.txt'],
  //   ['output json and yaml in plain mode', 'file1.json', 'file2.json', 'result3p.txt', 'plain'],
  //   ['output json and yaml in plain mode', 'file1.yaml', 'file2.yaml', 'result3p.txt', 'plain'],
  //   ['output json and yaml in plain mode with nesting', 'file3.json', 'file4.json', 'result4p.txt', 'plain'],
  //   ['output json and yaml in plain mode with nesting', 'file3.yaml', 'file4.yaml', 'result4p.txt', 'plain'],
  //   ['output json and yaml in json mode', 'file1.json', 'file2.json', 'result5j.txt', 'json'],
  //   ['output json and yaml in json mode', 'file1.yaml', 'file2.yaml', 'result5j.txt', 'json'],
  //   ['output json and yaml in json mode with nesting', 'file3.json', 'file4.json', 'result6j.txt', 'json'],
  //   ['output json and yaml in json mode with nesting', 'file3.yaml', 'file4.yaml', 'result6j.txt', 'json'],
  //   ['incorrect file format and wrong file path', 'fileNoExist.json', 'result1s.txt', null],
  // ];
  
  // test.each(testCases)(
  //   '%s',
  //   (testName, file1, file2, expectedFile, format) => {
  //     const result = format ? getPatch(file1, file2, format) : getPatch(file1, file2);
  //     const expected = expectedFile ? readFile(expectedFile) : null;
  //     expect(result).toEqual(expected);
  //   },
  // );

// написать для начала обычный jest, а после передавелать его на test each
// test.each([
//   {
//     file1: getFixturePath('file1.json'),

//     file2: getFixturePath('file2.json'),
//     outputFormat: 'stylish',
//     expected: readFile('result1.txt'),
//   },
//   {
//     file1: getFixturePath('file1.yaml'),
//     file2: getFixturePath('file2.yaml'),
//     outputFormat: 'stylish',
//     expected: readFile('result1.txt'),
//   },
//   {
//     file1: getFixturePath('file3.json'),
//     file2: getFixturePath('file4.json'),
//     outputFormat: 'stylish',
//     expected: readFile('result2.txt'),
//   }
// ]);
