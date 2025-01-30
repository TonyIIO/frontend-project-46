import plain from './plain.js';
import stylish from './stylish.js';

function formater(dataDiff, formatType) {
  switch (formatType) {
    case 'json':
      return JSON.stringify(dataDiff, null, 2);
    case 'plain':
      return plain(dataDiff);
    case 'stylish':
      return stylish(dataDiff);
    default:
      console.log('Error: this format is not supported.');
      return null;
  }
}

export default formater;
