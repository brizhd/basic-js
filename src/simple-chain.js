const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  str: "",
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(`( ${value} )`);
    } else {
      this.arr.push(`( )`);
    }
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && typeof position == 'number' && (position > 0) && (position <= this.arr.length-1)) {
      this.arr.splice(position-1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.str = this.arr.join('~~');
    this.arr = [];
    return this.str;
  }
};

module.exports = {
  chainMaker
};
