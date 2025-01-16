import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = keys.reduce((acc, key) => {
    switch (true) {
      case _.isObject(obj1[key]) && _.isObject(obj2[key]):
        acc[key] = getDiff(obj1[key], obj2[key]);
        break;
      case obj2[key] === undefined:
        acc[`- ${key}`] = obj1[key];
        break;
      case obj1[key] === undefined:
        acc[`+ ${key}`] = obj2[key];
        break;
      case obj1[key] === obj2[key]:
        acc[key] = obj1[key];
        break;
      default:
        acc[`- ${key}`] = obj1[key];
        acc[`+ ${key}`] = obj2[key];
        break;
    }
    return acc;
  }, {});

  return result;
};

export default getDiff;
