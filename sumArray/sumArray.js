/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function (array) {
  var max = array[array.length - 1];
  for (var i = array.length - 2; i >= 0; i--) {
    array[i] = Math.max(array[i] + array[i + 1], array[i]);
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
};

/*
greatest and contiguous
  1,2,3,-4,5 ->  1+2+3-4+5
  result[5]= result[-1]+5;
*/
console.log(sumArray([1, 2, 3])); // => 6
console.log(sumArray([1, 2, 3, -4, 5])); // 7
console.log(sumArray([4, -1, 5])); // => 8
console.log(sumArray([10, -11, 11])); // 11
