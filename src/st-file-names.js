import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let result = [];
  let set = new Set(names)

  let map = new Map();
  for (let e of set) {
    map.set(e,0);
  }
  
  names.forEach(e => {
    if(map.get(e)===0){
      map.set(e,map.get(e)+1);
      result.push(e)
    } else {
      let newKey= e+'('+map.get(e)+')';
      if(map.has(newKey)) {
        map.set(newKey,map.get(newKey)+1);
      }
      result.push(newKey)
      map.set(e,map.get(e)+1);
      
    }
  })

  return result
}