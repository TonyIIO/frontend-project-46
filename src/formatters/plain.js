import _ from 'lodash';

const formatValue = (value) => {
  if (value === null) return 'null';
  if (_.isObject(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return String(value);
};

const buildPath = (prefix, key) => (prefix ? `${prefix}.${key}` : key);

const plain = (object, path = '') => {
  const keys = _.uniq(_.keys(object).map((key) => key.replace(/^[-+]\s/, '')));
  const sortedKeys = _.orderBy(keys, [(key) => key]);

  const resultString = sortedKeys.reduce((acc, key) => {
    const currentPath = buildPath(path, key);
    const addedKey = `+ ${key}`;
    const removedKey = `- ${key}`;
    const hasAdded = _.has(object, addedKey);
    const hasRemoved = _.has(object, removedKey);

    if (hasAdded && hasRemoved) {
      return `${acc}Property '${currentPath}' was updated. From ${formatValue(object[removedKey])} to ${formatValue(object[addedKey])}\n`;
    }
    if (hasAdded) {
      return `${acc}Property '${currentPath}' was added with value: ${formatValue(object[addedKey])}\n`;
    }
    if (hasRemoved) {
      return `${acc}Property '${currentPath}' was removed\n`;
    }
    if (_.isPlainObject(object[key])) {
      return `${acc}${plain(object[key], currentPath)}\n`;
    }

    return acc;
  }, '');

  return resultString.trim();
};

export default plain;
