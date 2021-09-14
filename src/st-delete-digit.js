    import { NotImplementedError } from '../extensions/index.js';

    /**
     * Given some integer, find the maximal number you can obtain
     * by deleting exactly one digit of the given number.
     *
     * @param {Number} n
     * @return {Number}
     *
     * @example
     * For n = 152, the output should be 52
     *
     */
    export default function deleteDigit(n) {
      let string = String(n);
      let arr = string.split('');
      let arrNum = arr.map(el => Number(el))
      const min = Math.min(...arrNum);
      const index = arrNum.indexOf(min)
      arrNum.splice(index, 1)

      return Number(arrNum.join(''))
    }

