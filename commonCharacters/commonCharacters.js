/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function (string1, string2) {
  // TODO: Your code here!
  var result = [];
  var obj1 = {};
  var obj2 = {};
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    obj1[char] = obj1[char] === undefined ? 1 : obj1[char] + 1;
  }
  for (let i = 0; i < string2.length; i++) {
    let char = string2[i];
    obj2[char] = obj2[char] === undefined ? 1 : obj2[char]++;
  }
  console.log(obj1);
  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (obj2[char] !== undefined && result.indexOf(char) === -1) {
      result.push(char);
    }
  }
  return result.join('');
};

//test
var result = commonCharacters('aeexivou', 'aegeihobu');
console.log(result);
