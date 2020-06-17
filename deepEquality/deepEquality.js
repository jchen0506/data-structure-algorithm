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
  var result = true;
  var akey = Object.keys(apple);
  var okey = Object.keys(orange);
  if (akey.length !== okey.length) return false;
  else {
    for (var i = 0; i < akey.length; i++) {
      if (
        typeof apple[akey[i]] === 'object' &&
        typeof orange[akey[i]] === 'object'
      ) {
        result = result && deepEquals(apple[akey[i]], orange[akey[i]]);
      } else {
        result = result && apple[akey[i]] === orange[akey[i]];
      }
    }
  }
  return result;
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
console.log(deepEquals({ a: 'foo' }, { a: 'foo' }));

var a = { foo: 'bar', biz: 'baz' };

var b = { biz: 'baz', foo: 'bar' };
console.log(deepEquals(a, b));
