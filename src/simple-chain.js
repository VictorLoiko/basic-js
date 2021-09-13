import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */


export default {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position<=0 || position>this.getLength()){
      this.array=[];
      throw new Error("You can't remove incorrect link!")
    } 
    this.array.splice(position-1,1);
    
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array=[];
    return result;
  }
};