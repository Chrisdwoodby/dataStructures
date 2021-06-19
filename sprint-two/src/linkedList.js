var LinkedList = function() {
  var list = {};
  list.head = null;
  // reference of the first node
  list.tail = null;

  // each value stored in a node
  // tail.head keeps a reference of the first node on the list
  // and each node copntains a referecnce to the nest node on the list



  list.addToTail = function(value) {
    // create new node
    var newNode = new Node(value);
    // adjust tail nodes next to refer to new node ^
    if (!list.head) {
    // assign the reference  the next node to each new node
      // newNode.next would net the reference of the next node to a newly created node
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail = newNode;
      list.head.next = newNode;
    }

  };

  list.removeHead = function() {
    // move the head reference to the next item in the list after the original head
    // assuming the head is not empty and there is a node located there
    if (list.head) {
      var removed = list.head.value;
      list.head = list.head.next;
    }
    return removed;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    if (list.head.next !== null) {
      list.head = list.head.next;

      if (list.head.value === target) {
        return true;
      }
    }
    return false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
