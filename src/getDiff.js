import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  return keys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      acc[key] = getDiff(value1, value2);
    } else if (value2 === undefined) {
      acc[`- ${key}`] = value1;
    } else if (value1 === undefined) {
      acc[`+ ${key}`] = value2;
    } else if (value1 !== value2) {
      acc[`- ${key}`] = value1;
      acc[`+ ${key}`] = value2;
    } else {
      acc[key] = value1;
    }

    return acc;
  }, {});
};

export default getDiff;
