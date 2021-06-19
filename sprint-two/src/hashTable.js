

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index); // setting up a bucket with an index;

  if (!bucket) { // if the bucket is empty
    bucket = []; // create a new bucket
    this._storage.set(index, bucket); // assign the bucket an index
  }
  var found = false;

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) { // iterate over the bucket
      // bucket[i] represents a tuple;
      if (bucket[i][0] === k) { // search for the desired value "k" at the buckets index
        bucket[i][1] = v; // assign the value "v" to that key
        found = true; // we found they key so this is true
        break; // end the loop onec the key has been found
      }
    }
  }
  if (!found) { // if we have not found the key
    bucket.push([k, v]); // create a new tuple
  }
  // if no bucket was found return a new tuple
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // we want to retrieve the value @ k within the array --- the key the value is located at is "k"
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return bucket;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return tuple[1];
      break;
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


