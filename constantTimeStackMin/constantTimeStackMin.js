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
  this.minValue = Number.MAX_VALUE;
  this.secondMin = Number.MAX_VALUE;
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

var stack = new Stack();
stack.push(200);
// we just added an element so the stack's min should be 200
console.log(stack.min() + ' should be 200');

stack.push(100);
// we just added _another_ element and the stack's min should now be 100
console.log(stack.min() + ' should be 100');

stack.pop();
// we just removed an element so the stack's min should be 200 again
console.log(stack.min() + ' should be 100');

stack.push(50);
stack.push(50);
// we just added _another_ element and the stack's min should now be 50
console.log(stack.min() + ' should be 50');
// even if we pop the lowest value, the stack should remember duplicates
stack.pop();
console.log(stack.min() + ' should be 50');
