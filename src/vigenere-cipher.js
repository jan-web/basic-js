    import { NotImplementedError } from "../extensions/index.js";

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
      constructor(directMode = true) {
        this.directMode = directMode;
      }

      prepareKey(message, key) {
        let preparedKey = [];
        let currentKeyIndex = 0;
        const letters = /[A-Za-z]/;
        for (let i = 0; i < message.length; i++) {
          if (currentKeyIndex === key.length) {
            currentKeyIndex = 0;
          }
          if (letters.test(message[i])) {
            preparedKey.push(key[currentKeyIndex]);
            currentKeyIndex += 1;
          } else {
            preparedKey.push(message[i]);
          }
        }
        return preparedKey.join("");
      }

      convertToNumbers(str) {
        const alphabet = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
        let strUpperCase = str.toUpperCase();
        let converted = [];
        for (let i = 0; i < strUpperCase.length; i++) {
          if (alphabet.includes(strUpperCase[i])) {
            converted.push(alphabet.indexOf(strUpperCase[i]));
          } else {
            converted.push(strUpperCase.charCodeAt(i));
          }
        }

        return converted;
      }

      convertToLetters(arr) {
        const alphabet = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
        let converted = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < 26) {
            converted.push(alphabet[arr[i]]);
          } else {
            converted.push(String.fromCharCode(arr[i]));
          }
        }

        return converted;
      }

      encrypt(message, key) {
        if (!message || !key) {
          throw new Error("Incorrect arguments!");
        }
        let preparedKey = this.prepareKey(message, key);
        let convertedMessage = this.convertToNumbers(message);
        let convertedKey = this.convertToNumbers(preparedKey);
        let result = [];
        for (let i = 0; i < convertedMessage.length; i++) {
          if (convertedMessage[i] < 26) {
            result.push(
              (Number.parseInt(convertedMessage[i]) +
                Number.parseInt(convertedKey[i])) %
                26
            );
            continue;
          } else {
            result.push(convertedMessage[i]);
          }
        }
        result = this.convertToLetters(result);

        return this.directMode ? result.join("") : result.reverse().join("");
      }

      decrypt(message, key) {
        if (!message || !key) {
          throw new Error("Incorrect arguments!");
        }
        let preparedKey = this.prepareKey(message, key);
        let convertedMessage = this.convertToNumbers(message);
        let convertedKey = this.convertToNumbers(preparedKey);
        let result = [];
        for (let i = 0; i < convertedMessage.length; i++) {
          if (convertedMessage[i] < 26) {
            if (convertedMessage[i] < convertedKey[i]) {
              result.push(convertedMessage[i] + 26 - convertedKey[i]);
            } else {
              result.push(convertedMessage[i] - convertedKey[i]);
            }
          } else {
            result.push(convertedMessage[i]);
          }
        }
        result = this.convertToLetters(result);

        return this.directMode ? result.join("") : result.reverse().join("");
      }
    }
