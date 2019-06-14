import fs from 'fs';

export default class Anagrams {
  static readInput (path) {
    const input = fs.readFileSync(path, 'utf8');
    return input;
  }

  static parseInput (input) {
    const data = input.split('\n').filter(val => val !== '');
    return data;
  }

  static findAnagrams (path) {
    const input = this.readInput(path);
    const data = this.parseInput(input);
    if (data.length < 2) {
      throw new Error('ERROR: Need a minimum of two words');
    }
    const anagrams = {};
    const [w1, w2] = data;
    const s1 = w1.split('').sort().join();
    const s2 = w2.split('').sort().join();
    if (s1 === s2) {
      anagrams[w1] = [];
      anagrams[w1].push(w1, w2);
      return anagrams;
    } else {
      return {};
    }
  }
}

console.log(Anagrams.findAnagrams('src/input.txt'));
