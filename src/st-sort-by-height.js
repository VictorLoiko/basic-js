import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let indexSet=[];

  let sorted = arr.filter( (item,index) => {
    if(item!==-1) return true;
    else {
      indexSet.push(index)
      return false
    }
  })
  .sort((a,b)=>{
    return a-b
  })

  indexSet.forEach( el => {
    sorted.splice(el,0,-1)
  })

  return sorted
};
