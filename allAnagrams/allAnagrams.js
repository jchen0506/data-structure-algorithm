/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
  // Your code here.
  var result = [];
  var newstring = string + string;
  var array = newstring.split('');
  for (var i = 0; i < newstring.length - string.length + 1; i += string.length) {
    result.push(array.splice(i, string.length).join(''))
  }
  return result;
};

console.log(allAnagrams('abc'));
