    /**
     * There's a list of file, since two files cannot have equal names,
     * the one which comes later will have a suffix (k),
     * where k is the smallest integer such that the found name is not used yet.
     *
     * Return an array of names that will be given to the files.
     *
     * @param {Array} names
     * @return {Array}
     *
     * @example
     * For input ["file", "file", "image", "file(1)", "file"],
     * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
     *
     */
    export default function renameFiles(names) {
      const newArr = [];
      for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (newArr.indexOf(name) === -1) {
          newArr.push(name);
        } else {
          let k = 0;
          let newName = "test";
          do {
            k++;
            newName = name + `(${k})`;
          } while (newArr.indexOf(newName) !== -1);
          newArr.push(newName);
        }
      }

      return newArr;
    }
