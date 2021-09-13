import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
  let counter =1;
  str.split('').forEach((item, i, array) => {
    if(item===array[i+1]){
      counter++;
    } else {
      result+= counter===1 ? item : counter+item;
      counter=1;
    }
  })
  return result;
}
