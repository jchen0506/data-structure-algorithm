/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 *  // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var translateRomanNumeral = function (romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  if (romanNumeral.length === 0) {
    return 0;
  }
  var romanArray = romanNumeral.split('');
  var result = 0;
  for (var i = 0; i < romanArray.length - 1; i++) {
    var char1 = romanArray[i];
    var num1 = DIGIT_VALUES[char1];
    var char2 = romanArray[i + 1];
    var num2 = DIGIT_VALUES[char2];

    if (num1 < num2) {
      num1 *= -1;
    }
    result += num1;
  }

  return result + DIGIT_VALUES[romanArray[romanArray.length - 1]];
};

console.log(translateRomanNumeral('LX'));
console.log(translateRomanNumeral('IV'));
