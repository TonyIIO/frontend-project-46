import _ from 'lodash';

const differences = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  return keys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const updates = (() => {
      if (_.isObject(value1) && _.isObject(value2)) {
        return { [key]: differences(value1, value2) };
      }
      if (value2 === undefined) {
        return { [`- ${key}`]: value1 };
      }
      if (value1 === undefined) {
        return { [`+ ${key}`]: value2 };
      }
      if (value1 !== value2) {
        return { [`- ${key}`]: value1, [`+ ${key}`]: value2 };
      }
      return { [key]: value1 };
    })();

    return { ...acc, ...updates };
  }, {});
};

export default differences;
