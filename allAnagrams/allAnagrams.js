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
  var array = string.split(''); //['a','b','c','d']

  var helper = function (anagram, array) {
    if (anagram.length === string.length) {
      result.push(anagram.join(''));
    } else {
      for (var i = 0; i < array.length; i++) {
        var current = array[i];
        anagram.push(array[i]);
        array.splice(i, 1);
        helper(anagram, array);
        array.splice(i, 0, current);
        anagram.pop(array[i]);
      }
    }
  };
  helper([], array);
  return result;
};

console.log(allAnagrams('abcd'));
//abcdabcd
// abcd, abdc, acbd, acdb,
