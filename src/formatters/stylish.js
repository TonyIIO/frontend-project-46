import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

const getLeftIndent = (depth) => replacer.repeat(depth * spacesCount).slice(0, -2);
const rightIndent = '  ';

const stylish = (object, depth = 1) => _.keys(object).reduce((acc, key) => {
  const value = object[key];
  const indent = getLeftIndent(depth);

  if (_.isPlainObject(value)) {
    const nested = stylish(value, depth + 1).join('\n');
    acc.push(`${indent}${key}: {\n${nested}\n${getLeftIndent(depth)}${rightIndent}}`);
  } else {
    acc.push(`${indent}${key}: ${value}`);
  }

  return acc;
}, []);

const formatStylish = (object) => `{\n${stylish(object).join('\n')}\n}`;

export default formatStylish;

// import _ from 'lodash';

// eslint-disable-next-line max-len
// const getIndent = (depth, indentSize = 4, leftOffset = 2) => ' '.repeat(depth * indentSize - leftOffset);

// const stylish = (object, depth = 1) => _.keys(object).reduce((acc, key) => {
//   const value = object[key];
//   const indent = getIndent(depth);

//   if (_.isPlainObject(value)) {
//     const nested = stylish(value, depth + 1).join('\n');
//     acc.push(`${indent}${key}: {\n${nested}\n${getIndent(depth, 4, 0)}}`);
//   } else {
//     acc.push(`${indent}${key}: ${value}`);
//   }

//   return acc;
// }, []);

// const formatStylish = (object) => `{\n${stylish(object).join('\n')}\n}`;

// export default formatStylish;
