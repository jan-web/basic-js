    export default class DepthCalculator {
      res = 1;

      calculateDepth(arr) {
        let flattenArr = arr.flat(Infinity)
        if (JSON.stringify(arr) == JSON.stringify(flattenArr)) {
          const result = this.res;
          this.res = 1

          return result
        }
        this.res += 1;
        arr = arr.flat();

        return this.calculateDepth(arr)
      }
    }


