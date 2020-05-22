/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
 * Stack Class
 */
var Stack = function () {
  this.storage = {};
  this.minValue = Number.MIN_VALUE;
  this.secondMin = Number.MIN_VALUE;
  this.end = 0;
};

// add an item to the top of the stack

Stack.prototype.push = function (value) {
  this.end++;
  this.storage[this.end] = value;
  if (value <= this.minValue) {
    this.secondMin = this.minValue;
    this.minValue = value;
  }
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  var top = this.storage[this.end];
  if (this.minValue === top) {
    this.minValue = this.secondMin;
  }
  delete this.storage[this.end];
  this.end--;
  return top;
};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.end;
};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.minValue;
};

var newstack = new Stack();
newstack.size();
console.log(newstack.size());
newstack.push(3);
newstack.push(4);
console.log(newstack.storage);
console.log(newstack.pop());
