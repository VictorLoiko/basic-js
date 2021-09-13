import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

const init2DArray = matrix => {
  let array = new Array(matrix.length);
  for (let i=0; i<matrix.length; i++) {
    if(matrix[i]){
      array[i] = new Array(matrix[i].length);
    }
  }
  for(let i=0; i<matrix.length; i++) 
    for (let j=0; j<matrix[i].length; j++)
      array[i][j]=0;
  return array;
}

export default function minesweeper (matrix) {
  let output=init2DArray(matrix);
  for(let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix.length; j++) {
      if(matrix[i][j]) {
        output[i][j]=1;
  
        if(typeof matrix[i-1]!=='undefined') {
          if(typeof matrix[i-1][j-1]!=='undefined') {
            output[i-1][j-1] = !matrix[i-1][j-1] ? output[i-1][j-1]+1 : 1;
          }
          if(typeof matrix[i-1][j]!=='undefined') {
            output[i-1][j] = !matrix[i-1][j] ? output[i-1][j]+1 : 1;
          }
          if(typeof matrix[i-1][j+1]!=='undefined')  {
            output[i-1][j+1] = !matrix[i-1][j+1] ? output[i-1][j+1]+1 : 1;
          }
        }

        if(typeof matrix[i]!=='undefined') {
          if(typeof matrix[i][j+1]!=='undefined') {
            output[i][j+1] = !matrix[i][j+1] ? output[i][j+1]+1 : 1;
          }

          if(typeof matrix[i][j-1]!=='undefined') {
            output[i][j-1] = !matrix[i][j-1] ? output[i][j-1]+1 : 1;
          }

        }

        if(typeof matrix[i+1]!=='undefined') {
          if(typeof matrix[i+1][j+1]!=='undefined') {
            output[i+1][j+1] = !matrix[i+1][j+1] ? output[i+1][j+1]+=1 : 1;
          }
          if(typeof matrix[i+1][j]!=='undefined') {
            output[i+1][j] = !matrix[i+1][j] ? output[i+1][j]+1 : 1;
          }
          if(typeof matrix[i+1][j-1]!=='undefined') {
            output[i+1][j-1] = !matrix[i+1][j-1] ? output[i+1][j-1]+1 : 1;
          }
        }
      }
    }
  }
    

  return output;
}