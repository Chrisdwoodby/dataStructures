var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.startIndex = 0;
  this.endIndex = 0;

};

// var queue = new Queue();

Queue.prototype.enqueue = function(value) {
  this.endIndex += 1;
  this.storage[this.endIndex] = value;
  // this.endIndex += 1;
};

Queue.prototype.dequeue = function() {
  this.startIndex += 1;
  var temp = this.storage[this.startIndex];
  delete this.storage[this.startIndex];
  return temp;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
