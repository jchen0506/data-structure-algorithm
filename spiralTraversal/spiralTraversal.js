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
  var result = [];
  var flag = [];
  for (let row = 0; row < matrix.length; row++) {
    var flagrow = [];
    for (let column = 0; column < matrix[0].length; column++) {
      flagrow.push(false);
    }
    flag.push(flagrow);
  }
  var i = 0;
  var j = 0;
  while (flag[i][j] === false || matrix[i][j] !== undefined) {
    result.push(matrix[i][j]);
    j++;
    flag[i][j] = true;
  }
  i++;
  j--;
  while (flag[i][j] === false || matrix[i][j] !== undefined) {
    result.push(matrix[i][j]);
    i++;
    flag[i][j] = true;
  }
  j--;
  i--;
  while (flag[i][j] === false || matrix[i][j] !== undefined) {
    result.push(matrix[i][j]);
    j--;
    flag[i][j] = true;
  }
  i--;
  while (flag[i][j] === false || matrix[i][j] !== undefined) {
    result.push(matrix[i][j]);
    i--;
    flag[i][j] = true;
  }

  return result;
};

//test case
console.log(
  spiralTraversal([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9],
  ])
);

/*
 row stays, column+1, until visited or undefined
 row+1, column stays, until visited or undefined
 row stays, column-1, until visited or undefined
 row-1, column statys, until visited or undefined
 */
