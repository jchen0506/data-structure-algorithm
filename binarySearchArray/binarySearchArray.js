/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var result = 0;
  var helper = function (left, right, array) {
    var mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else {
      while (left < right) {
        if (array[mid] > target) {
          return helper(left, mid - 1, array);
        } else {
          return helper(mid + 1, right, array);
        }
      }
    }
    return null;
  };
  result = helper(0, array.length - 1, array);
  return result;
};

var array = [1, 2, 3, 4, 5];
console.log(binarySearch(array, 4));
console.log(binarySearch(array, 6));
