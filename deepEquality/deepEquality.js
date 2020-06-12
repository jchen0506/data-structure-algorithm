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
  if (apple === orange) {
    return true;
  }
  var appleKey = Object.keys(apple).sort();
  var orangeKey = Object.keys(orange).sort();

  if (appleKey.length !== orangeKey.length) {
    return false;
  } else {
    for (var i = 0; i < appleKey.length; i++) {
      if (appleKey[i] !== orangeKey[i]) {
        isDeepEqual = false;
        return false;
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
        return false;
      } else {
        return deepEquals(apple[appleKey[i]], orange[orangeKey[i]]);
      }
    }
    return true;
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
// console.log(deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: { d: 5 } } }));
// console.log(deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 5 } }));
// console.log(deepEquals({ a: 'foo' }, { a: 'foo' }));

var a = { foo: 'bar', biz: 'baz' };
var b = { foo: 'bar' };
console.log(deepEquals(a, b));
