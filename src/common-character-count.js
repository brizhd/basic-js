const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let common = 0;
  let mainStr;
  let secondStr;
  if (arrS1.length < arrS2.length) {
      mainStr = arrS2;
      secondStr = arrS1;
  } else {
      mainStr = arrS1;
      secondStr = arrS2;
  }
  for(let i =0; i<mainStr.length; i++) {
      for (let j=0; j < secondStr.length; j++) {
          if(mainStr[i]==secondStr[j]) {
              common +=1;
              delete secondStr[j];
              break;
          }
      }
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
