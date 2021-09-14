    export default function encodeLine(str) {
      let res = "";
      if (str.length === 0) {

        return res;
      }
      let counter = 0
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i+1]) {
          if (counter) {
            counter += 1
            res += counter
          }
          counter = 0
          res += str[i]
        }
        if (str[i] === str[i+1]) {
          counter += 1
        }
      }

      return res
    }
