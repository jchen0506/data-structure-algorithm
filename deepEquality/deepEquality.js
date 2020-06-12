/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */
var deepEquals = function (apple, orange) {
  var appleKey = Object.keys(apple);
  var orangeKey = Object.keys(orange);
  var isDeepEqual = true;

  if (appleKey.length !== orangeKey.length) {
    isDeepEqual = false;
  } else {
    for (var i = 0; i < appleKey.length; i++) {
      if (appleKey[i] !== orangeKey[i]) {
        isDeepEqual = false;
      } else if (
        (typeof apple[appleKey[i]] === 'object' &&
          typeof orange[orangeKey[i]] !== 'object') ||
        (typeof apple[appleKey[i]] !== 'object' &&
          typeof orange[orangeKey[i]] === 'object')
      ) {
        return false;
      } else if (
        typeof apple[appleKey[i]] !== 'object' &&
        typeof orange[orangeKey[i]] !== 'object' &&
        apple[appleKey[i]] !== orange[orangeKey[i]]
      ) {
        isDeepEqual = false;
      } else {
        isDeepEqual = deepEquals(apple[appleKey[i]], orange[orangeKey[i]]);
      }
    }
    return isDeepEqual;
  }
};

/*
{
  a: 1,
  b: {
    c: 3
  }
}

{
  a: 1,
  b: {
    c: 3
  }
}
*/
console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: { d: 5 } } }));
console.log(deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 5 } }));
