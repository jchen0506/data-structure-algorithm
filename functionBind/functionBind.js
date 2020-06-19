/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

var bind = function () {
  // TODO: Your code here
  var args = Array.prototype.slice.call(arguments);
  var func = args[0];
  var context = args[1];
  var restargs = args.slice(2);
  return function () {
    var currentArgs = restargs.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, currentArgs);
  };
};

var alice = {
  name: 'alice',
  shout: function () {
    console.log(this.name);
  },
};
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, { name: 'bob' });
// boundShout(); // alerts 'bob'

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function () {
  var args = Array.prototype.slice.call(arguments);
  var func = this;
  var prevArgs = args.slice(1);
  var context = args[0];
  return function () {
    var currentArgs = prevArgs.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, currentArgs);
  };
};

var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({ name: 'bob' });
boundShout(); // alerts 'bob'

var func = function (a, b) {
  return a + b;
};
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
