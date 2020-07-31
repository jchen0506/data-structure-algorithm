/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function (matrix) {
  // TODO: Implement me!
  var res = [];

  if (matrix.length === 0) return res;

  var m = matrix.length;
  var n = matrix[0].length;
  var top = 0;
  var bottom = m - 1;
  var left = 0;
  var right = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
};

//test case
console.log(
  spiralTraversal([
    [2, 5, 8],
    [4, 0, -1],
  ])
);

/*
row stays, column+1, until visited or undefined
row+1, column stays, until visited or undefined
row stays, column-1, until visited or undefined
row-1, column statys, until visited or undefined
 */
