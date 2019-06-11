import fs from 'fs';

export default class StringCalculator {
  static getInput (path) {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  }

  static parseData (data) {
    const splitData = data.split(',');
    // Coma al final
    if (splitData.length > 1 && splitData[splitData.length - 1] === '') {
      throw new Error('Invalid array');
    }
    return splitData.filter(val => val !== '').map(val => Number(val));
  }

  static getSum (arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc = 0, val) => acc + val);
  }
}

StringCalculator.parseData('1,2');
