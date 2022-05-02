const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arrEmail = email.split("");
  let index = arrEmail.lastIndexOf('@');
  return arrEmail.slice(index+1).join("");
}

module.exports = {
  getEmailDomain
};
