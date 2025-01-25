import { fileURLToPath } from 'url';
import path from 'path';
import getPatch from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('json', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  const result = getPatch(json1, json2);
  expect(result).toEqual({
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '+ verbose': true,
    '+ timeout': 20,
    '- timeout': 50,
  });
});

test('jsonNoExist', () => {
  const file1 = getFixturePath('file5.json');
  const file2 = getFixturePath('file6.json');
  const result2 = getPatch(file1, file2);
  expect(result2).toBeNull();
});

test('yaml', () => {
  const yaml1 = getFixturePath('file1.yaml');
  const yaml2 = getFixturePath('file2.yaml');
  const result3 = getPatch(yaml1, yaml2);
  expect(result3).toEqual({
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
  });
});

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
