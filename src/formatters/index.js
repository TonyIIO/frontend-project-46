import plain from './plain.js';
import stylish from './stylish.js';

function formater(object, formatType) {
  switch (formatType) {
    case 'json':
      return JSON.stringify(object, null, 2);
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
