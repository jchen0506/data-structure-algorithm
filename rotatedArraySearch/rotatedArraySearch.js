/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var start_index = findIndex(rotated, 0, rotated.length - 1);
  if (rotated[start_index] === target) {
    return start_index;
  } else if (target > rotated[0] && target < rotated[start_index - 1]) {
    return binarySearch(rotated, target, 0, start_index - 1);
  } else {
    return binarySearch(rotated, target, start_index + 1, rotated.length - 1);
  }
  return -1;
};

var binarySearch = function (array, target, left, right) {
  var mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === target) return mid;
    else if (target > array[mid]) {
      return binarySearch(array, target, mid + 1, right);
    } else {
      return binarySearch(array, target, left, mid - 1);
    }
  }
  return -1;
};

var findIndex = function (rotated, left, right) {
  if (rotated[left] < rotated[right]) {
    return 0;
  }
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (rotated[mid] > rotated[mid + 1]) {
      return mid + 1;
    } else {
      if (rotated[left] > rotated[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return 0;
};

console.log(findIndex([2, 3, 4, 5, 6, 0, 1], 0, 6));
console.log(rotatedArraySearch([4, 5, 6, 7, 8, 9, 0, 1, 2, 3], 7));
/*
[4, 5, 6, 7, 8, 9, 0, 1, 2, 3][4, 5, 6, 7, 8, 9, 0, 1, 2, 3]
start: 6
0 9 6+15/2=10  % 9-1
mid: 0


*/
