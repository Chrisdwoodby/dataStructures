var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.location = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.location] = value;
  this.location += 1;
};

stackMethods.pop = function() {
  this.location -= 1;
  var tempLocation = this.storage[this.location];
  delete this.storage[this.location];
  return tempLocation;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
