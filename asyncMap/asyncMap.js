'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

var asyncMap = function (tasks, callback) {
  var counter = 0;
  var result = [];

  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      // purposely not considering what happens if error returned
      // we are defining the callback passed to each task
      // tasks[key]() is an invocation of a task that has a predetermined callback
      // we are intercepting the result of that callback and something something more with it
      tasks[i](function (res) {
        // store the result of task in the results storage
        result[i] = res;
        // increment our counter
        counter++;
        // check if we got all our tasks to comeback
        // if so then run our cb passed in to asyncMap
        if (counter === tasks.length) {
          callback(result);
        }
      });
      // invoke our anonymous function with key to create scope
    })(i);
  }
};

asyncMap(
  [
    function (cb) {
      setTimeout(function () {
        cb('one');
      }, 200);
    },
    function (cb) {
      setTimeout(function () {
        cb('two');
      }, 100);
    },
  ],
  function (results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  }
);
