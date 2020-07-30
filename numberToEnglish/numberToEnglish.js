/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  var numbersToPlaceArray = Object.keys(numbersToPlace).sort();
  var result = '';
  var helper = function (num, place) {
    console.log(num);
    // console.log(place);
    for (var i = place; i >= 0; i--) {
      if (num / numbersToPlaceArray[i] < 1) {
        continue;
      } else {
        console.log(num / numbersToPlaceArray[i]);
        if (
          num / numbersToPlaceArray[i] > 1 &&
          num / numbersToPlaceArray[i] < 10
        ) {
          result +=
            numbersToWords[
              Math.floor(num / numbersToPlaceArray[i]) * numbersToPlaceArray[i]
            ];
        }
        console.log(i);
        result =
          helper(Math.floor(num / numbersToPlaceArray[i], i)) +
          numbersToPlace[numbersToPlaceArray[i]] +
          helper(Math.floor(num % numbersToPlaceArray[i], i));
      }
    }
  };
  helper(this, 7);
  return result;
};

var number = new Number(150043);
console.log(number.toEnglish());

/*
  150043.273->toString()
  [150043, 273] ->
150043  / quitillion , <1
        / quarillion, <1
        / trillion, <1
        / billion, <1
        / million, <1
        / 1000 = 150

        % 1000 =43
    150 -> 150 /100 = 1 ONE hundred
        -> 150 % 100 =50
        -> 50 /10 =5 fifity   join by and
        150043-150*1000 =43
    43 -> 43 /100 <1
       -> 43 / 10 = fourty

*/
