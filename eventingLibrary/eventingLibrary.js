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
    if (obj.on[event]) {
      obj.on[event].push(callback);
    } else {
      obj.on[event] = [];
      obj.on[event].push(callback);
    }
  };

  obj.trigger = function (event) {
    var restArgs = Array.prototype.slice.call(arguments, 1);

    if (obj.on[event]) {
      for (var i = 0; i < obj.on[event].length; i++) {
        obj.on[event][i].apply(this, restArgs);
      }
    }
  };
  return obj;
};

var car = mixEvents({
  color: 'red',
  'insurance-premium': 'costly',
  speed: 0,
  radio: 'off',
});

// Both of these should get called when we trigger 'green-light'.
car.on('green-light', function () {
  car.speed = 100;
});

car.on('green-light', function () {
  car.radio = 'blaring';
});

console.log(car.speed);
console.log(car.radio);

car.trigger('green-light');
console.log('-----After Trigger-----');
console.log(car.speed);
console.log(car.radio);
