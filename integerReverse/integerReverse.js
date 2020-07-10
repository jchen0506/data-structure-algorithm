/*
 *
 * Integer Reverse
 *
 * Given a positive integer, return its digits reversed.
 *
 * - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
 * - Only use integers and math in your solution.
 *
 */

function reverseInteger(number) {
  // TODO: Implement this function!
  var i = 10;
  var reversed = 0;
  var digit = number % 10;

  while (digit === 0) {
    number = Math.floor(number / 10);
    digit = number % 10;
  }

  while (number % i > 0) {
    var digit = number % 10;

    number = Math.floor(number / 10);
    reversed = reversed * 10 + digit;
  }
  return reversed;
}

console.log(reverseInteger(100)); // 379475

/*
  574973 %10 =3 (574972 / 10)  => 3*1
   57497 %10 =7 => 3*10+7=37
    5749 %10 =9 => 3*10*10+7*10+9*1=379
    574  %10 =4  => 3*1000+7*100+9*10 +4 =3794
    57   %10 =7  => 3784*10+7=37947
    5    %10 =0 => 37947*10+5= 379475
*/
