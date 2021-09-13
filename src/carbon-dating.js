import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD;
  if(!isNaN(parseFloat(sampleActivity))&&
  typeof sampleActivity === "string"&&
  Number.parseFloat(sampleActivity)>0&&
  Number.parseFloat(sampleActivity)<MODERN_ACTIVITY
  ) {
    let age = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k;
    return Math.ceil(age);
  }
  else {
    return false;
  }
  
}