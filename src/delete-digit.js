const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxnum = 0;
  const numArray = Array.from(n.toString());
  for (let i = 0; i < numArray.length; i += 1) {
    let testNum = Number(numArray.toSpliced(i, 1).join(''));
    if (testNum > maxnum) {
      maxnum = testNum;
    }
  }
  return maxnum;
}

module.exports = {
  deleteDigit
};
