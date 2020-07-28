/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function (string) {
  var result = [];
  var obj = {};
  var array = string.split('');

  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]] === undefined) obj[array[i]] = 1;
    else obj[array[i]]++;
  }

  for (var key in obj) {
    result.push([key, obj[key]]);
  }

  return result;
};

var swap = function (array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
//test
console.log(characterFrequency('mmmaaaiiibbb'));
/*  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 */
console.log(characterFrequency('miaaiaaippi'));
/* [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 * */

console.log(characterFrequency('mississippi'));
// *  [
//  *    ['a', 3],
//  *    ['b', 3],
//  *    ['i', 3],
//  *    ['m', 3]
//  *  ]
