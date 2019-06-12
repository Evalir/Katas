import fs from 'fs';
export default class Anagrams {
  static readInput (path) {
    const input = fs.readFileSync(path, 'utf8');
    return input;
  }

  static parseInput (input) {
    return input.split('\n');
  }

  static getAnagrams (data) {
    if (data.length < 2) {
      throw new Error('Insufficient data provided: Need 2 words or more.');
    }
    const seen = Array(data.length).fill(0);
    const anagrams = [];
    for (let i = 0; i < data.length; i++) {
      if (seen[i] === 0) {
        seen[i] = 1;
        const anagramsToAdd = [];
        anagramsToAdd.push(data[i]);
        const curSortedStr = data[i].split('').sort().join();
        for (let j = i + 1; j < data.length; j++) {
          const nxtSortedStr = data[j].split('').sort().join();
          if (curSortedStr === nxtSortedStr) {
            anagramsToAdd.push(data[j]);
          }
        }
        if (anagramsToAdd.length > 1) {
          anagrams.push(anagramsToAdd);
        }
      }
    }
    return anagrams;
  }
}

const input = Anagrams.readInput('src/wordlist.txt');
const data = Anagrams.parseInput(input);
console.log('getting anagrams');
const anagrams = Anagrams.getAnagrams(data);
console.log('done');
console.log(anagrams);
