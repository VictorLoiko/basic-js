import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  if(n.split('-').length!==6) {
    return false;
  }

  let pairsLength  = n.split('-');
  for(let i=0; i<pairsLength.length;i++) {
    if(pairsLength[i].length!==2) {
      return false;
    }

    let elements = pairsLength[i].split('')
    for (let j=0; j<elements.length; j++) {
      if (elements[j].match(/^[0-9A-F]$/)===null) return false
    }
  }
  
  return true
}