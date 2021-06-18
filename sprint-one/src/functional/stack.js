var Stack = function() {
  var someInstance = {};
  var stackLocation = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackLocation] = value;
    stackLocation += 1;
  };

  someInstance.pop = function() {
    stackLocation -= 1;
    var popped = storage[stackLocation];
    delete storage[stackLocation];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
