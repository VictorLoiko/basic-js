import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str,  { repeatTimes= 1, separator= '+', addition= '', additionRepeatTimes= 1, additionSeparator= '|' }) {
  let res=[];
  if(str== null) str='null'
  if(addition== null) addition='null'
  for (let i =0; i<repeatTimes; i++) {
    let tmp = '';
    tmp+=str;
    let additionArray = [];
    for(let j=0; j<additionRepeatTimes;j++) {
      additionArray.push(addition);
    }
  
    tmp+=additionArray.join(additionSeparator)
    res.push(tmp);
  }
  return res.join(separator);
  
}