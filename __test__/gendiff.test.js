import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { describe, expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => (
  path.isAbsolute(filename)
    ? filename
    : path.resolve(__dirname, '..', '__fixtures__', filename)
);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const inFormat = ['json', 'yml'];

describe('testing gendiff', () => {
  test.each(inFormat)('testing gendiff with format', (format) => {
    const filePath1 = getFixturePath(`file1.${format}`);
    const filePath2 = getFixturePath(`file2.${format}`);
    const expectedStylish = readFile('result1.txt');
    const expectedPlain = readFile('result2.txt');
    const expectedJson = readFile('result3.txt');
    expect(gendiff(filePath1, filePath2)).toBe(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'stylish')).toBe(expectedStylish);
    expect(gendiff(filePath1, filePath2, 'plain')).toBe(expectedPlain);
    expect(gendiff(filePath1, filePath2, 'json')).toBe(expectedJson);
    expect(gendiff(filePath1, filePath2, 'noSupportFormat')).toBeNull();
  });
});

// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs';
// import { describe, expect, test } from '@jest/globals';
// import gendiff from '../src/index.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// const inFormat = ['json', 'yml'];

// describe('testing gendiff', () => {
//   test.each(inFormat)('testing gendiff with format', (format) => {
//     const filePath1 = getFixturePath(`file1.${format}`);
//     const filePath2 = getFixturePath(`file2.${format}`);
//     expect(gendiff(filePath1, filePath2)).toBe(readFile('result1.txt'));
//     expect(gendiff(filePath1, filePath2, 'stylish')).toBe(readFile('result1.txt'));
//     expect(gendiff(filePath1, filePath2, 'plain')).toBe(readFile('result2.txt'));
//     expect(gendiff(filePath1, filePath2, 'json')).toBe(readFile('result3.txt'));
//     expect(gendiff(filePath1, filePath2, 'noSupportFormat')).toBeNull();
//   });
// });
