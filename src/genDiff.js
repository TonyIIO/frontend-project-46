import * as fs from 'fs';
import _ from 'lodash';

const getDiff = (obj1, obj2) => {
    const keys =_.sortBy(_.union(Object.keys({...obj1, ...obj2})))
    const result = {}
    for (const key of keys) {
      if(_.isObject(key)) {
        return getDiff(key, keys);
      }
    if(obj2[key] === undefined) result[key] = `- ${key}: ${obj1[key]}`
    else if(obj1[key] === undefined) result[key] = `+ ${key}: ${obj2[key]}`
    else if (obj1[key] === obj2[key]) result[key] = `${key}: ${obj1[key]}`
    else if (obj1[key] !== obj2[key]) result[key] = `- ${key}: ${obj1[key]}`//,` + ${key}: ${obj2[key]}` - не срабатывает нужно добавить еще один вывод с новым значением в обекте 2.
    }
  return  Object.values(result).join(' ')
}

const genDiff = (filepath1, filepath2) => {
  const readFile1 = fs.readFileSync(filepath1, 'utf-8');
  const readFile2 = fs.readFileSync(filepath2, 'utf-8');
  const obj1 = JSON.parse(readFile1);
  const obj2 = JSON.parse(readFile2);
  
    return getDiff(obj1, obj2);
  }; 

  console.log(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'));
  
  export default genDiff;