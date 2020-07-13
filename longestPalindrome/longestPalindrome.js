/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function (string) {
  var array = string.split('');
  var palindromeArray = [];
  var longest = '';

  for (var i = 0; i < array.length; i++) {
    var palindrome = '';
    var left = i;
    var right = i;
    if (array[i] === array[i - 1]) {
      palindrome = array[i - 1] + array[i];
      left = i - 1;
      right = i;
    } else if (array[i] === array[i + 1]) {
      palindrome = array[i] + array[i + 1];
      left = i;
      right = i + 1;
    } else if (array[i - 1] === array[i + 1]) {
      palindrome = array[i - 1] + array[i] + array[i + 1];
    } else {
      continue;
    }

    var j = 1;
    while (
      array[left - j] === array[right + j] &&
      array[left - j] !== undefined &&
      array[right + j] !== undefined
    ) {
      palindrome = array[left - j] + palindrome + array[right + j];
      j++;
    }
    palindromeArray.push(palindrome);
  }

  for (var j = 0; j < palindromeArray.length; j++) {
    if (palindromeArray[j].length > longest.length) {
      longest = palindromeArray[j];
    }
  }
  return longest;
};

//test
var string = 'My dad is a racecar athlete';
console.log(longestPalindrome(string)); //a racecar a
/*
M ->*My
e ->cec->aceca ->.....a racecar a

*/

var string2 = 'dceaaecd';
console.log(longestPalindrome(string2)); // dceaaecd

/*
  a ->aa
*/
