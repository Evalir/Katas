import fs from 'fs';
import mock from 'mock-fs';
import StringCalculator from '../index';
beforeEach(() => {
  mock({
    '/test': {
      'case_empty': '',
      'case_one': '1',
      'case_two': '1,2',
      'case_three': '1,2,3',
      'case_invalid': '1,2,3,'
    }
  })
})

afterEach(() => {
  mock.restore();
});

it('should read input', () => {
  const data = StringCalculator.readInput('/test/case_empty');
  expect(data).toEqual('');
});

it('should read input 2', () => {
  const data = StringCalculator.readInput('/test/case_two');
  expect(data).toEqual('1,2');
});

it('should error on empty file', () => {
  const data = StringCalculator.readInput('/test/case_empty');
  expect(data).toEqual('');
  try {
    const numbers = StringCalculator.parse(data);
    //expect(true).toBe(false);
  } catch(e) {
    expect(e.message).toBe('Number expected but EOF found.');
  }
});

it('should throw error on invalid input', () => {
  const data = StringCalculator.readInput('/test/case_invalid');
  expect(data).toEqual('1,2,3,');
  try {
    const numbers = StringCalculator.parse(data);
    expect(true).toBe(false);
  } catch(e) {
    expect(e.message).toBe('Number expected but EOF found.');
  }
})

it('should parse valid input correctly', () => {
  const data = StringCalculator.readInput('/test/case_three');
  expect(data).toEqual('1,2,3');
  const numbers = StringCalculator.parse(data);
  expect(numbers).toBe([1,2,3]);
})