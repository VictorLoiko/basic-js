import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice()
  let controlSequence = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

  while(array.findIndex(v => controlSequence.includes(v))!==-1) {
    
    let index = array.findIndex(v => controlSequence.includes(v))

    if(array[index]==='--discard-next'){
      if(array[index+1]){
        array.splice((index+1),1)
        if (array[index+1].includes('-prev')) {
          array.splice((index+1),1)
        }
      }
    }
    if(array[index] === '--discard-prev'){
      if(array[index-1]){
        array.splice((index-1),1)
      }
    }
    if(array[index] === '--double-next'){
      if(array[index+1]){
        array.splice(index,0,array[index+1])
      }
    }
    if(array[index] === '--double-prev'){
      if(array[index-1]){
        array.splice((index-1),0,array[index-1])
      }
    }
    array.splice(array.findIndex(v => controlSequence.includes(v)),1);
  }

  return array;
}