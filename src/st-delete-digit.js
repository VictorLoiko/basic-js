import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let max= new Number;
  let nStringArray = n.toString().split('');
  for(let i=0; i<nStringArray.length; i++) {
    let newArray = nStringArray.slice();
    newArray.splice(i,1)
    if(Number.parseInt(newArray.join(''))>max) {
      max = Number.parseInt(newArray.join(''));
    }
  }
  return max;
}
