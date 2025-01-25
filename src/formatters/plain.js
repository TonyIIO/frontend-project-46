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

  return keys.reduce((acc, key) => {
    const currentPath = buildPath(path, key);
    const addedKey = `+ ${key}`;
    const removedKey = `- ${key}`;
    const hasAdded = _.has(object, addedKey);
    const hasRemoved = _.has(object, removedKey);

    if (hasAdded && hasRemoved) {
      acc.push(`Property '${currentPath}' was updated. From ${formatValue(object[removedKey])} to ${formatValue(object[addedKey])}`);
    } else if (hasAdded) {
      acc.push(`Property '${currentPath}' was added with value: ${formatValue(object[addedKey])}`);
    } else if (hasRemoved) {
      acc.push(`Property '${currentPath}' was removed`);
    } else if (_.isPlainObject(object[key])) {
      acc.push(...plain(object[key], currentPath));
    }

    return acc;
  }, []);
};

export default plain;
