    import { NotImplementedError } from '../extensions/index.js';

    /**
     * Given two strings, find the number of common characters between them.
     *
     * @param {String} s1
     * @param {String} s2
     * @return {Number}
     *
     * @example
     * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
     * Strings have 3 common characters - 2 "a"s and 1 "c".
     */
    export default function getCommonCharacterCount(s1, s2) {
      let res = 0
      if (s1 === '' || s2 === '') {
        
        return res
      }
      let array1 = s1.split('')
      let array2 = s2.split('')


      for (let i = 0; i < array1.length; i++) {
        const symbol = array1[i]
        if (array2.indexOf(symbol) > -1) {
          const indexInArr2 = array2.indexOf(symbol)
          array1.splice(i, 1)
          array2.splice(indexInArr2, 1)
          i = i - 1
          res += 1
        }
      }

      return res
    }

