    export default function countCats(matrix) {
      let res = 0
    for (let i = 0; i < matrix.length; i ++) {
      matrix[i].forEach(element => {
        if (element === '^^') {
          res += 1
        }
      });
    }

    return res
    }
