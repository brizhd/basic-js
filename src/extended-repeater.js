const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let arrAddition = [];

  if(options.addition == true || options.addition === null) {
    options.addition = String(options.addition);
  }
  if (options.separator == undefined) {
    options.separator = "+";
  } 
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if(options.repeatTimes==undefined) {
    options.repeatTimes = 1;
  }
  if(options.additionRepeatTimes==undefined) {
    options.additionRepeatTimes = 1;
  }
    

  for(let i=0; i<options.additionRepeatTimes; i++) {
    arrAddition.push(options.addition);
  }

  let strAdditin =  arrAddition.join(`${options.additionSeparator}`)

  for(let i=0; i<options.repeatTimes; i++) {
    result.push(str+strAdditin);
  }

  return result.join(`${options.separator}`);
}

module.exports = {
  repeater
};
