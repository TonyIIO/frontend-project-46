// исходдный проход (не прошло тест)
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

// добавление двух пробелов(не прошло тест)
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

// const replacer = ' ';
// const spacesCount = 4;

// const indent = (depth) => replacer.repeat(depth * spacesCount - 2);
// const bracketIndent = (depth) => replacer.repeat((depth - 1) * spacesCount);

// const stringify = (value, depth) => {
//   if (!_.isObject(value)) {
//     return `${value}`;
//   }

//   const lines = Object.entries(value).map(
//     ([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`,
//   );

//   return `{\n${lines.join('\n')}\n${bracketIndent(depth + 1)}}`;
// };

// const stylish = (diffTree) => {
//   const iter = (node, depth) => {
// eslint-disable-next-line max-len
//     const makeLine = (sign, key, value) => `${indent(depth)}${sign} ${key}: ${stringify(value, depth)}`;

//     return node.flatMap((item) => {
//       switch (item.type) {
//         case 'added':
//           return makeLine('+', item.key, item.value);
//         case 'removed':
//           return makeLine('-', item.key, item.value);
//         case 'unchanged':
//           return makeLine(' ', item.key, item.value);
//         case 'changed':
//           return [
//             makeLine('-', item.key, item.oldValue),
//             makeLine('+', item.key, item.newValue),
//           ];
//         case 'nested':
// eslint-disable-next-line max-len
//           return `${indent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1).join('\n')}\n${bracketIndent(depth)}  }`;
//         default:
//           throw new Error(`Unknown type: ${item.type}`);
//       }
//     });
//   };

//   return `{\n${iter(diffTree, 1).join('\n')}\n}`;
// };

// export default stylish;
