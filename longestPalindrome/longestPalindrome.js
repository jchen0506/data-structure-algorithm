/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function (string) {
  if (string.length === 0) return '';
  if (string.length === 1) return string;
  var start = 0;
  var end = 0;
  var array = string.split('');
  for (var i = 0; i < array.length; i++) {
    var length1 = extendFromCenter(array, i, i);
    var length2 = extendFromCenter(array, i, i + 1);
    var maxlength = Math.max(length1, length2);
    if (maxlength > end - start) {
      start = i - Math.floor((maxlength - 1) / 2);
      end = i + Math.floor(maxlength / 2);
    }
  }
  return array.slice(start, end + 1).join('');
};

var extendFromCenter = function (array, left, right) {
  while (left >= 0 && right < array.length && array[left] === array[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};

//test
// var string = 'My dad is a racecar athlete';
// console.log(longestPalindrome(string)); //a racecar a
/*
M ->*My
e ->cec->aceca ->.....a racecar a

*/

var string2 = 'My dad is a racecar athlete';
console.log(longestPalindrome(string2)); // dceaaecd

/*
  a ->aa
*/
