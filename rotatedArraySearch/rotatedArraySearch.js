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
  // Your code here:
  var resort = rotated.sort();
  console.log(resort);
  var left = 0;
  var right = resort.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (resort[mid] === target) {
      return mid;
    } else {
      if (target < resort[mid]) {
        right = mid - 1;
        console.log(right);
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100));
/*
[4,5,6,0,1,2,3]
[2,3,4,5,6,0,1]
index 0-6, 7=0
6 0 1 2 3 4 5
2, 2>1, 2<3,
5, 5<6, 5>4
*/
