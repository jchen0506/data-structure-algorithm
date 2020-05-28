/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    [5,1,4,3,6,10,2]
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
  var left = 0;
  var right = array.length - 1;
  if (left < right) {
    //using partition helper function to update the pivot position
    pivot = partition(array, left, right);
    // seperate the original array to two parts while left is smaller than pivot right is greater than pivot
    arrayleft = array.slice(left, pivot - 1);
    arrayright = array.slice(pivot + 1, right);
    //recursively sort both part
    quicksort(arrayleft);
    quicksort(arrayright);
  }
  return array;
};
// find where the pivot should go
var partition = function (array, left, right) {
  var pivot = array[right]; // pivot is alway the last element of array
  while (left < right) {
    //move the element greater than pivot to the right until it hits the element that is smaller than pivot
    while (array[left] > array[pivot]) {
      swap(left, left + 1, array);
      left++;
    }
    //move the element smaller than pivot to the right until it hits the element that is greater than pivot
    while (array[right] < array[pivot]) {
      swap(right - 1, right, array);
      right--;
    }
  }
  pivot = (right + left) / 2;
  return pivot;
};

var swap = function (first, second, array) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
  return array;
};

console.log(quicksort([5, 1, 4, 3, 6, 2, 10]));
