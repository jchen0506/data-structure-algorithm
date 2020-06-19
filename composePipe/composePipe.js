/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function () {
  var args = Array.prototype.slice.call(arguments);

  return function () {
    var currentargs = Array.prototype.slice.call(arguments);
    var result = args[args.length - 1].apply(null, currentargs);
    for (var i = args.length - 2; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
};

var pipe = function () {
  var args = Array.prototype.slice.call(arguments);

  return function () {
    var currentargs = Array.prototype.slice.call(arguments);
    var result = args[0].apply(null, currentargs);
    for (var i = 1; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
};

// //Compose Example
// var greet = function (name) {
//   return 'hi: ' + name;
// };
// var exclaim = function (statement) {
//   return statement.toUpperCase() + '!';
// };
// var welcome = compose(greet, exclaim);
// console.log(welcome('phillip')); // 'hi: PHILLIP!'

//Pipe Example:
var add2 = function (number) {
  return number + 2;
};
var multiplyBy3 = function (number) {
  return number * 3;
};
console.log(pipe(add2, multiplyBy3)(5)); // 21
console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)); // 63
