import parseJson from './parse.js';
import getDiff from './getDiff.js';

const getPatch = (filepath1, filepath2) => {
  const obj1 = parseJson(filepath1);
  const obj2 = parseJson(filepath2);

  return getDiff(obj1, obj2);
};

export default getPatch;
