const recursAdd = (stringStart, numberArray, ans) => {
  const numLetters = [[' '], ['1'], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  for (let i = 0; i < numLetters[Number(numberArray[0])].length; i += 1) {
    if (numberArray.length <= 1) {
      ans.push(`${stringStart}${numLetters[Number(numberArray[0])][i]}`);
    } else {
      recursAdd(`${stringStart}${numLetters[Number(numberArray[0])][i]}`, numberArray.slice(1), ans);
    }
  }
};

const numToWords = function (input) {
  // make an array of just the digits in the submitted string
  const ans = [];
  const numArray = (input.split('')).filter(elem => (/\d/).test(elem));
  recursAdd('', numArray, ans);
  return ans;
};

module.exports = numToWords;
