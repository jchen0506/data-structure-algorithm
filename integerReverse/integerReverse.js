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

  if (number === 0) {
    return 0;
  }

  while (digit === 0) {
    number = Math.floor(number / 10);
    digit = number % 10;
  }

  while (number > 0) {
    digit = number % 10; //digit=1, 0
    number = Math.floor(number / 10); //number=100, 10
    reversed = reversed * 10 + digit; //1, 1001;
  }
  return reversed;
}

console.log(reverseInteger(100)); // 379475
console.log(reverseInteger(1234)); // 574973
console.log(reverseInteger(150)); // 574973
console.log(reverseInteger(2342617432)); // 574973
console.log(reverseInteger(2836591)); // 574973
console.log(reverseInteger(58648550)); // 574973
console.log(reverseInteger(5748104710)); // 574973
console.log(reverseInteger(77477477)); // 574973
console.log(reverseInteger(1)); // 574973
console.log(reverseInteger(10)); // 574973
console.log(reverseInteger(0)); // 574973

/*
574973 %10 =3 (574972 / 10)  => 3*1
   57497 %10 =7 => 3*10+7=37
    5749 %10 =9 => 3*10*10+7*10+9*1=379
    574  %10 =4  => 3*1000+7*100+9*10 +4 =3794
    57   %10 =7  => 3784*10+7=37947
    5    %10 =0 => 37947*10+5= 379475
*/
