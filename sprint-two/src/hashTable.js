var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || []; // setting up a bucket with an index;
  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];

    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
    }
  }
  if (!found) {
    bucket.push([k, v]);
    this.size ++;
    // check to see if size is 3/4ths the size of the current limit
  }
  this._storage.set(index, bucket);

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

