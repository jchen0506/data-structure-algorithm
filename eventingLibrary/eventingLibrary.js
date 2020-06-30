/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function (obj) {
  obj.on = function (event, callback) {
    obj.on.event = callback;
  };
  obj.trigger = function (event) {
    var restArgs = Array.prototype.slice.call(arguments, 1);
    if (obj.on.event) {
      return obj.on.event(restArgs);
    }
  };
  return obj;
};

//test without argument
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function () {
  // On takes an event name and a callback function
  console.log('Age changed');
});

console.log(obj);
obj.age++;
obj.trigger('ageChange'); //expect console log Age changed

//test with argument

obj.on('ageChangeWithArgs', function (n) {
  console.log('Age changed:' + n);
});
obj.trigger('ageChange', 5); //expect  Age changed: 5
