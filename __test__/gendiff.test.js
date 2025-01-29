import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { describe, expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('testing gendiff', () => {
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
      const result = gendiff(file1, file2);
      expect(result).toBeNull();
    } else {
      const result = format ? gendiff(file1, file2, format) : gendiff(file1, file2);
      const expected = readFile(expectedFile);
      expect(result).toEqual(expected);
    }
  });
});

// import { readFile, getFixturePath } from '../src/utils.js';
// import getPatch from '../src/index.js';

// const readInfo = (filename) => (readFile(getFixturePath(filename), 'utf-8'));

// test.each([
// eslint-disable-next-line max-len
//   ['output json in stylish mode with nesting', 'file1.json', 'file2.json', 'result1.txt', undefined],
// eslint-disable-next-line max-len
//   ['output yaml in stylish mode with nesting', 'file1.yml', 'file2.yml', 'result1.txt', undefined],
//   ['output json in plain mode with nesting', 'file1.json', 'file2.json', 'result2.txt', 'plain'],
//   ['output yaml in plain mode with nesting', 'file1.yml', 'file2.yml', 'result2.txt', 'plain'],
//   ['output json in json mode with nesting', 'file1.json', 'file2.json', 'result3.txt', 'json'],
//   ['output yaml in json mode with nesting', 'file1.yml', 'file2.yml', 'result3.txt', 'json'],
// eslint-disable-next-line max-len
//   ['incorrect file format and wrong file path', 'fileNoExist.json', 'result1s.txt', null, undefined],
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
