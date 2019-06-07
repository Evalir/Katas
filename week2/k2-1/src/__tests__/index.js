const mock = require('mock-fs');
const StringCalculator = require('../index.js');

beforeEach(() => {
  mock({
    '/test': {
      'case_empty.txt': '',
      'case_one.txt': '1',
      'case_two.txt': '1,2',
      'case_three.txt': '1,2,3',
      'case_many.txt': '1,2,3,4,5',
    }
  });
});

afterEach(() => {
  mock.restore();
});

describe('StringCalculator', () => {
  it('Should return input as given by user', () => {
    const input = StringCalculator.getInput('/test/case_one.txt');
    expect(input).toEqual('1');
  });

  it('Should parse the parameters appropiately', () => {
    const input = StringCalculator.getInput('/test/case_two.txt');
    expect(input).toEqual('1,2');
    const params = StringCalculator.parse(input);
    expect(params).toEqual([1, 2]);
  });

  it('Should sum the parameteres approapiately', () => {
    const input = StringCalculator.getInput('/test/case_three.txt');
    expect(input).toEqual('1,2,3');
    const params = StringCalculator.parse(input);
    expect(params).toEqual([1, 2, 3]);
    const sum = StringCalculator.solve(params);
    expect(sum).toEqual(6);
  });

  it('should handle corner case 0', () => {
    const input = StringCalculator.getInput('/test/case_empty.txt');
    const params = StringCalculator.parse(input);
    const sum = StringCalculator.solve(params);
    expect(sum).toEqual(0);
  });
});
