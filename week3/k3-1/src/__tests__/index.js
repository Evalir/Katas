import mock from 'mock-fs';
import Anagrams from '../index';

beforeEach(() => {
  mock({
    '/tests': {
      'case_empty': '',
      'case_ow': 'pink',
      'case_two_noa': 'pink\nping',
      'case_two_ana': 'pink\nknip',
      'case_many': 'pink\nknip\nrawr\nwrar\nabc\nabd'
    }
  });
});

afterEach(() => {
  mock.restore();
});

describe('kata', () => {
  it('should read input', () => {
    const input = Anagrams.readInput('/tests/case_ow');
    expect(input).toEqual('pink');
  });

  it('should parse data correctly', () => {
    const input = Anagrams.readInput('/tests/case_two_ana');
    expect(input).toEqual('pink\nknip');
    const data = Anagrams.parseInput(input);
    expect(data).toEqual(['pink', 'knip']);
  });

  it('should launch exception if less than two words', () => {
    const input = Anagrams.readInput('/tests/case_ow');
    expect(input).toEqual('pink');
    const data = Anagrams.parseInput(input);
    expect(data).toEqual(['pink']);
    expect(() => {
      Anagrams.getAnagrams(data);
    }).toThrow(Error);
  });

  it('should get no anagrams 2 words', () => {
    const input = Anagrams.readInput('/tests/case_two_noa');
    expect(input).toEqual('pink\nping');
    const data = Anagrams.parseInput(input);
    expect(data).toEqual(['pink', 'ping']);
    const anagrams = Anagrams.getAnagrams(data);
    expect(anagrams).toEqual([]);
  });

  it('should get anagrams 2 words', () => {
    const input = Anagrams.readInput('/tests/case_two_ana');
    expect(input).toEqual('pink\nknip');
    const data = Anagrams.parseInput(input);
    expect(data).toEqual(['pink', 'knip']);
    const anagrams = Anagrams.getAnagrams(data);
    expect(anagrams).toEqual([['pink', 'knip']]);
  });

  it('should get each anagram together', () => {
    const input = Anagrams.readInput('/tests/case_many');
    const data = Anagrams.parseInput(input);
    const anagrams = Anagrams.getAnagrams(data);
    expect(anagrams).toEqual([['pink', 'knip'], ['rawr', 'wrar']]);
  });
});
