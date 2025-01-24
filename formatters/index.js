import plain from './plain.js';
import stylish from './stylish.js';

function formater(object, formatType) {
  switch (formatType) {
    case 'json':
      return JSON.stringify(object); // доработать, вывод в одну строку идет
    case 'plain':
      return plain(object);
    case 'stylish':
      return stylish(object);
    default:
      console.log('Error: this format is not supported.');
      return null;
  }
}

export default formater;
