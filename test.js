/* eslint-env node, mocha */
const expect = require('chai').expect;
const numToWords = require('./assets/script.js');

describe('numToWords', function () {
  it('should convert a single digit to an array of letters', function () {
    expect(numToWords('3').length === 3);
    expect(numToWords('4')[1] === 'h');
  });
});
