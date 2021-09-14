    export default function transform(arr) {
      if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
      }
      if (arr.length === 0) {

        return arr;
      }

      const newArr = arr.slice();

      newArr.forEach((el) => {
        if (el === "--discard-next") {
          const index = newArr.indexOf("--discard-next");
          newArr[index] = undefined;
          if (index !== newArr.length - 1) {
            newArr[index + 1] = undefined;
          }
        }

        if (el === "--discard-prev") {
          const index = newArr.indexOf("--discard-prev");
          newArr[index] = undefined;
          if (index !== 0) {
            newArr[index - 1] = undefined;
          }
        }

        if (el === "--double-next") {
          const index = newArr.indexOf("--double-next");
          if (index !== newArr.length - 1) {
            newArr[index] = newArr[index + 1];
          }
          if (index === newArr.length - 1) {
            newArr[index] = undefined;
          }
        }

        if (el === "--double-prev") {
          const index = newArr.indexOf("--double-prev");
          if (index !== 0) {
            newArr[index] = newArr[index - 1];
          }
          if (index === 0) {
            newArr[index] = undefined;
          }
        }
      });

      const filteredArr = newArr.filter((item) => !!item);

      return filteredArr;
    }
