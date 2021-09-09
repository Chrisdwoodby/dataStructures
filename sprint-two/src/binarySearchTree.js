var BinarySearchTree = function(value) {
  // create initial tree
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.right = null;
  newTree.left = null;
  newTree.value = value;
  return newTree;
  // whenever we are returning an objecvt we dont need to use the "new" when we create a new instance of tree
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value > value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (this.value > value && this.left) {
    return this.left.contains(value);
  }
  if (this.value < value && this.right) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
