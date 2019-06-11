import mock from 'mock-fs';
import StringCalculator from '../index';

beforeEach(() => {
  mock({
    '/test': {
      'case_empty': '',
      'case_one': '1',
      'case_two': '1,2',
      'case_three': '1,2,3',
      'case_invalid': '1,2,3,',
      'case_many': '1,2,3,4,5,6'
    }
  });
});

afterEach(() => {
  mock.restore();
});
describe('kata', () => {
  it('should read input', () => {
    const data = StringCalculator.getInput('/test/case_empty');
    expect(data).toEqual('');
  });

  it('should parse data', () => {
    const data = StringCalculator.getInput('/test/case_empty');
    expect(data).toEqual('');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([]);
  });

  it('should parse data 2', () => {
    const data = StringCalculator.getInput('/test/case_two');
    expect(data).toEqual('1,2');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([1, 2]);
  });

  it('should get sum_empty', () => {
    const data = StringCalculator.getInput('/test/case_empty');
    expect(data).toEqual('');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([]);
    const sum = StringCalculator.getSum(parsedData);
    expect(sum).toEqual(0);
  });

  it('should get sum_one', () => {
    const data = StringCalculator.getInput('/test/case_one');
    expect(data).toEqual('1');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([1]);
    const sum = StringCalculator.getSum(parsedData);
    expect(sum).toEqual(1);
  });

  it('should get sum_two', () => {
    const data = StringCalculator.getInput('/test/case_two');
    expect(data).toEqual('1,2');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([1, 2]);
    const sum = StringCalculator.getSum(parsedData);
    expect(sum).toEqual(3);
  });

  it('should get sum_many', () => {
    const data = StringCalculator.getInput('/test/case_many');
    expect(data).toEqual('1,2,3,4,5,6');
    const parsedData = StringCalculator.parseData(data);
    expect(parsedData).toEqual([1, 2, 3, 4, 5, 6]);
    const sum = StringCalculator.getSum(parsedData);
    expect(sum).toEqual(21);
  });
});
