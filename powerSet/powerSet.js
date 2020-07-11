/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
// jump => jmpu =>
//    ==>j, jm,jp, ju,jmp,jmu, jpu,jmpu
//    ==>m, mp, mu, mpu

var powerSet = function (str) {
  var array = str.split('').sort();
  array = removeDuplicate(array);
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(['', array[i]]);
  }
  console.log(result);
  for (var j = result.length - 1; j > 0; j--) {
    var last = result[j];
    var first = result[j - 1];

    for (var k = 1; k < last.length; k++) {
      first.push(first[0].concat(last[k]));
      first.push(first[1].concat(last[k]));
    }
  }
  return result[0];
};
var removeDuplicate = function (array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] == undefined) {
      obj[array[i]] = 1;
    }
  }
  return Object.keys(obj);
};

console.log(powerSet('aaaabbbb'));
