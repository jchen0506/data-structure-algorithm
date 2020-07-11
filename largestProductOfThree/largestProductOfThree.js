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
  var arraySorted = array.sort(comparator);
  console.log(arraySorted);
  var option1 = arraySorted[0] * arraySorted[1] * arraySorted[array.length - 1];
  var option2 =
    arraySorted[array.length - 3] *
    arraySorted[array.length - 2] *
    arraySorted[array.length - 1];

  return option1 > option2 ? option1 : option2;
};

var comparator = function (a, b) {
  return a - b;
};

var array = [5, 3, 1, 4, 9, 7, 6];

console.log(largestProductOfThree(array)); //expect (9*7*6)=378
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29])); //expect 47027 41*-31*37
console.log(largestProductOfThree([-1, -2, -3, -4, -5, -6])); // expect -6
