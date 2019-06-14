import mock from 'mock-fs';
import _ from 'lodash';
import Anagrams from '../index';
beforeEach(() => {
  mock({
    '/test': {
      'case_empty': '',
      'case_one': 'one',
      'case_no': 'one\nons',
      'case_one_a': 'one\neon',
      'case_many': 'one\neon\nkata\nrip\ntaka\nrisk\nkris\nvim'
    }
  });
});

afterEach(() => {
  mock.restore();
});

function isEmpty (obj) {
  for (const key in obj) {
    if (obj.hasOwnPropert(key)) {
      return false;
    }
  }
  return true;
}

describe('kata', () => {
  it('should read input', () => {
    const input = Anagrams.readInput('/test/case_one');
    expect(input).toEqual('one');
  });

  it('should parse input correctly', () => {
    const input = Anagrams.readInput('/test/case_one_a');
    expect(input).toEqual('one\neon');
    const data = Anagrams.parseInput(input);
    expect(data).toEqual(['one', 'eon']);
  });

  it('should throw error on empty or insufficient input', () => {
    expect(() => Anagrams.findAnagrams('/test/case_empty')).toThrow(Error);
  });

  it('should throw error on empty or insufficient input 2', () => {
    expect(() => Anagrams.findAnagrams('/test/case_one')).toThrow(Error);
  });

  it('should find no anagrams', () => {
    const anagrams = Anagrams.findAnagrams('/test/case_no');
    expect(isEmpty(anagrams)).toEqual(true);
  });

  it('should find one anagram', () => {
    const anagrams = Anagrams.findAnagrams('/test/case_one_a');
    expect(_.isEqual(anagrams, { one: ['one', 'eon'] })).toEqual(true);
  });
});
