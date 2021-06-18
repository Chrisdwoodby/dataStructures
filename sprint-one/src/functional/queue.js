var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // var currQue = 0;
  var endIndex = 0;
  var startIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // storage[currQue] needs to be a referenece to the last not the first
    endIndex += 1;
    storage[endIndex] = value;
  };

  someInstance.dequeue = function() {
    // var dequed = storage[currQue - (currQue + 1)];
    // currQue -= 1;
    // var dequed = storage[1];
    // delete storage[1];
    // return dequed;
    if (endIndex - startIndex > 0) {
      startIndex += 1;
      var dequed = storage[startIndex];
      delete storage[startIndex];
      return dequed;
    }
    // currQue -= 1;
    // var temp = storage[currQue];
    // delete storage[currQue];
    // return temp;

  };

  someInstance.size = function() {
    return endIndex - startIndex;
  };

  return someInstance;
};
