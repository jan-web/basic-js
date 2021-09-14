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
   encrypt(message, keyword) {

    var alphabet = this.alphabet(); //get the alphabet
    var customKey = this.keywordResize(message, keyword); //get the keyword, normalized for the length of the message
    var splitMsg = message.split("");

    var encodedLetters = splitMsg.map(function(element, index){
      var msgLetterPosition = alphabet.indexOf(element); //finds the index of each letter in the message
      var keywordLetterPosition = alphabet.indexOf(customKey[index]); //finds the index of each letter in the customKey
      var encodedLetterPosition = msgLetterPosition + keywordLetterPosition; //adds the index of message & customKey index together and 'circles' back if greater than alphabet
      if(encodedLetterPosition > alphabet.length) encodedLetterPosition -= alphabet.length; //if new key is greater than the alphabet it subtracts the length of the alphabet
      return alphabet[encodedLetterPosition]; //returns the new encoded letter
    })

    return encodedLetters.join("").toUpperCase(); //joins the array of encoded letters back together
  }
  decrypt(message, keyword) {
    var alphabet = this.alphabet();
    var customKey = this.keywordResize(message, keyword);
    var splitMsg = message.split("");
    //mapping decoded message
    var decodedLetters = splitMsg.map(function(element, index){
      var letterIndex = alphabet.indexOf(element) - alphabet.indexOf(customKey[index]);
      if(letterIndex < 0) letterIndex += alphabet.length;
      return alphabet[letterIndex];
    });
    return decodedLetters.join("").toUpperCase();
  }
   //Adjusts the side of the keyword to match the size of the message
    keywordResize = function(message, keyword) {
      var result = "";
      var splitMsg = keyword.split("");
      for (var i = 0; i < message.length; i++ ) {
        var position = i % keyword.length;
        console.log('position: ', position);
        result += splitMsg[position];
      }
       console.log('result= ', result);
      return result;
    }

//Returns the alphabet as an array
    alphabet = function(){
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      alphabet = alphabet.split("")
      return alphabet;
    }

}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// => 'AEIHQX SX DLLU!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
//  => 'ATTACK AT DAWN!'