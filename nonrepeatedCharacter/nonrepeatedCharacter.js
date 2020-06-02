/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
  var array = string.split('');
  var occurance = {};
  for (var i = 0; i < array.length; i++) {
    let current = array[i];
    occurance[current] =
      occurance[current] === undefined ? 1 : occurance[current] + 1;
  }

  for (var j = 0; j < array.length; j++) {
    let current = array[j];
    if (occurance[current] === 1) {
      return current;
    }
  }
  return null;
};

var string = 'AABBCCCDEB';
var string2 = '2AAAbbbb111';

console.log(firstNonRepeatedCharacter(string));
console.log(firstNonRepeatedCharacter(string2));
