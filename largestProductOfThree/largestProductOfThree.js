/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  // TODO: everything
  //find the largest 3 number in the array.
  /*   [5,3,1]->[5,3,4]->[5,9,4]->[5,9,7]->[6,9,7]
    push 3 number into array and sort it
    if next number is larger than min of array
    push new number ,pop min
    return product of the 3 numbers array
    */
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(array[i]);
  }
  // result.sort(comparator);
  for (var j = 3; j < array.length; j++) {
    var min = result.sort(comparator)[2];
    if (array[j] > min) {
      result.pop();
      result.push(array[j]);
    }
  }
  var product = result[0] * result[1] * result[2];
  return product;
};

var comparator = function (a, b) {
  return b - a;
};

var array = [5, 3, 1, 4, 9, 7, 6];

console.log(largestProductOfThree(array)); //expect (9*7*6)=378
