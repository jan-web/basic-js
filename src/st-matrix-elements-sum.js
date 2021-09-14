    import { NotImplementedError } from "../extensions/index.js";

    /**
     * Given matrix, a rectangular matrix of integers,
     * just add up all the values that don't appear below a "0".
     *
     * @param {Array<Array>} matrix
     * @return {Number}
     *
     * @example
     * matrix = [
     *  [0, 1, 1, 2],
     *  [0, 5, 0, 0],
     *  [2, 0, 3, 3]
     * ]
     *
     * The result should be 9
     */
    export default function getMatrixElementsSum(matrix) {
      let res = 0;
      let broken = [];
      for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let u = 0; u < row.length; u++) {
          if (broken.indexOf(u) === -1) {
            res += row[u];
            if (row[u] === 0) {
              broken.push(u);
            }
          }
        }
      }
      
    return res
    }
