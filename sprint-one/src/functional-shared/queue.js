var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.startIndex = 0;
  queue.endIndex = 0;
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.endIndex += 1;
  this.storage[this.endIndex] = value;
};

queueMethods.dequeue = function() {
  if (this.endIndex - this.startIndex > 0) {
    this.startIndex += 1;
    var dequed = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    return dequed;
  }
};

queueMethods.size = function() {
  return this.endIndex - this.startIndex;
};

