var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.location = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.location] = value;
  this.location += 1;
};

Stack.prototype.pop = function() {
  this.location -= 1;
  var temp = this.storage[this.location];
  delete this.storage[this.location];
  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


