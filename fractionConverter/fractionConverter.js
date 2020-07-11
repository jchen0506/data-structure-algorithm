/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
  // Your code here
  var splitDigit = number.toString().split('.');

  var leftToDot = Number(splitDigit[0]);
  var rightToDot = Number(splitDigit[1]);

  var divisor = 10;
  while (Math.floor(rightToDot / divisor) > 0) {
    divisor *= 10;
  }
  var commonDivisor = findGreatestCommanDivsor(rightToDot, divisor);
  console.log(commonDivisor);
  var fractionBottom = divisor / commonDivisor;
  var fractionTop = rightToDot / commonDivisor;

  var resultTop = leftToDot * fractionBottom + fractionTop;
  var resultBottom = fractionBottom;

  return resultTop + '/' + resultBottom;
};

var findGreatestCommanDivsor = function (num1, num2) {
  var min = num1 < num2 ? num1 : num2;
  for (var i = min; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
    i--;
  }
  return 1;
};

var findLeastCommonMultiple = function (num1, num2) {};

console.log(toFraction(2.5));
console.log(toFraction(2.25));
/* exmaple:
0.5 => [0, 5] => 5/10 =>
{
  10/2, 5/2 X
  10/3, 5/3 X
  10/4  5/4 X
  10/5  5/5 => 1/2
}
3.0 => [3, 0] => 3/1
2.5 => [2, 5] => [2, 1], [5 10]=> 2/1+5/10 = 2/1 + 1/2=>{
  1*2, 2*2 =4/2
}
2.25 => [2 25] => 2,1; 25 100

4 6 => 12
*/
