/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  // Your code here.
  // map the occurance time to value using obj (iterate the array)
  var occuranceMap = {};
  arr.forEach(function (item) {
    // never occur yet
    if (occuranceMap[item] === undefined) {
      occuranceMap[item] = 1;
    } else {
      occuranceMap[item] += 1;
    }
  });
  // check if it's even
  for (var i = 0; i < arr.length; i++) {
    if (occuranceMap[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
  //find the first even one
  // if no even return null
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

console.log(typeof evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])); //  2
console.log(evenOccurrence(['meow', 1, 1, 'meow']));
