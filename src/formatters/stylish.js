import _ from 'lodash';

const replacer = ' ';
const spacesCount = 4;

const getIndent = (depth) => replacer.repeat(depth * spacesCount - 2);
const getBracketIndent = (depth) => replacer.repeat((depth - 1) * spacesCount);

const stylish = (data, depth = 1) => {
  const lines = Object.entries(data).flatMap(([key, value]) => {
    const indent = getIndent(depth);
    const { actualKey, sign } = (() => {
      if (key.startsWith('- ')) return { actualKey: key.slice(2), sign: '- ' };
      if (key.startsWith('+ ')) return { actualKey: key.slice(2), sign: '+ ' };
      return { actualKey: key, sign: '  ' };
    })();

    if (_.isPlainObject(value)) {
      const formattedValue = stylish(value, depth + 1);
      return `${indent}${sign}${actualKey}: ${formattedValue}`;
    }

    return `${indent}${sign}${actualKey}: ${value}`;
  });

  const bracketIndent = getBracketIndent(depth);
  return `{\n${lines.join('\n')}\n${bracketIndent}}`;
};

export default stylish;
