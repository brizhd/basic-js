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
  let arr = String(n).split('');
  let result = +arr.slice(1, arr.length).join("");

  for(let i=1; i<arr.length; i++) {
    let item = arr[i];
    arr[i]='';
    let variant = +arr.join("");
    if(result < variant) {
      result = variant;
    } 

    arr[i]=item;
  }

  return result;
}

module.exports = {
  deleteDigit
};
