const fs = require('fs');

const StringCalculator = {
  getInput: function (path) {
    const input = fs.readFileSync(path, 'utf8');
    return input;
  },
  parse: function (params) {
    const splitParams = params.split(',');
    const arr = splitParams.map(param => Number(param));
    return arr;
  },
  solve: function (numbers) {
    return numbers.reduce((acc, num) => acc + num);
  }
};

module.exports = StringCalculator;
