import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct=true){
    this.direct=direct;
  }

  equalizeArrays(upperMessageArray, upperKeyArray) {
    let j = 0;
    while (upperKeyArray.length<upperMessageArray.length) {
      upperKeyArray.push(upperKeyArray[j])
      j++;
      if (j===upperKeyArray.length) {
        j=0;
      }
    }
    return upperKeyArray
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let resultArray = [];
    const upperMessageArray = message.toUpperCase().split('');
    let upperKeyArray = key.toUpperCase().split('');
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    upperKeyArray = this.equalizeArrays(upperMessageArray,upperKeyArray)

    upperMessageArray.forEach((element,index) => {
      if (!alphabet.includes(element)){
        resultArray.push(element);
        upperKeyArray.splice(index,0,element)
      }
      else {
        resultArray.push( alphabet[(alphabet.indexOf(element) + alphabet.indexOf(upperKeyArray[index])) % alphabet.length] )
      }      
    });
    return this.direct===true ?  resultArray.join('') : resultArray.reverse().join('');  
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }

    let resultArray = [];
    const encryptedUpperMessageArray = encryptedMessage.toUpperCase().split('');
    let upperKeyArray = key.toUpperCase().split('');
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    upperKeyArray = this.equalizeArrays(encryptedUpperMessageArray,upperKeyArray)

    encryptedUpperMessageArray.forEach((element,index) => {
      if (!alphabet.includes(element)){
        resultArray.push(element);
        upperKeyArray.splice(index,0,element)
      }
      else {
        resultArray.push( alphabet[(alphabet.indexOf(element) + alphabet.length - alphabet.indexOf(upperKeyArray[index])) % alphabet.length] )
      }      
    });
    return this.direct===true ?  resultArray.join('') : resultArray.reverse().join('');  
    
  }
}