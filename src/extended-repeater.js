/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  if (!separator) {
    separator = "+";
  }
  if (!additionSeparator) {
    additionSeparator = "|";
  }

  if(`${options.addition}` !== 'undefined') {
    addition = `${options.addition}`
  }

  let allAddition = "";
  if (addition) {
    allAddition =
      (`${addition}` + additionSeparator).repeat(additionRepeatTimes - 1) + `${addition}`;
  }

  let res = str + allAddition;

  let repeated = 1;
  if (repeatTimes > 1) {
    do {
      res += separator + str + allAddition;
      repeated += 1;
    } while (repeated !== repeatTimes);
  }

  return res;
}


