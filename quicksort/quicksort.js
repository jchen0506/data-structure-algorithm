/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    [5,1,4,3,6,10,2]
 *   low          high
 *                pivot
 *    Picks a value in the array as a pivot.
 *    [5,1,4,3,6,10,2]
 *     |
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    [5,1,4,3,2,6,10]

 *    [5,1,4,3,2,6,10]
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */
// O(logn)
var quicksort = function (array) {
  var low = 0;
  var high = array.length - 1;
  var sort = function (array, low, high) {
    if (low < high) {
      var pivot = partition(array, low, high);
      sort(array, low, pivot - 1);
      sort(array, pivot + 1, high);
    }
  };
  sort(array, low, high);
  return array;
};
// find where the pivot should go
var partition = function (array, low, high) {
  var pivot = array[high]; // pivot is alway the last element of array
  var i = low - 1;
  for (var j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  var temp2 = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp2;
  return i + 1;
};

var swap = function (first, second, array) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

console.log(quicksort([5, 1, 4, 3, 6, 2, 10]));
