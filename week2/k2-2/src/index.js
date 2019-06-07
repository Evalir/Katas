import fs from 'fs';

export default class StringCalculator {
  static readInput (path) {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  }

  static parse (data) {
    const splitArr = data.split(',');
    if (splitArr[splitArr.length - 1] === '') {
      throw new Error('Number expected but EOF found.');
    }
    return splitArr.filter(val => val !== ',').map(num => Number(num));
  }
}
