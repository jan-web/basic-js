    import { NotImplementedError } from "../extensions/index.js";

    /**
     * Given an array with heights, sort them except if the value is -1.
     *
     * @param {Array} arr
     * @return {Array}
     *
     * @example
     * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
     *
     * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
     */
    export default function sortByHeight(arr) {
      const withoutOnes = arr.filter((height) => height !== -1);
      if (withoutOnes.length === 0) {
        return arr;
      }
      const sortedHeights = withoutOnes.sort((a, b) => a - b);
      let currentIndex = 0;
      const sorted = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
          sorted.push(arr[i]);
        } else {
          sorted.push(sortedHeights[currentIndex]);
          currentIndex++;
        }
      }

      return sorted;
    }
