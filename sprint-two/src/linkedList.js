var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }

    if (list.head !== null && list.tail !== null) {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head !== null) {
      var node1 = list.head;
      var node2 = node1.next;
      var storage = node1.value;
      list.head = node2;
    }
    return storage;

  };

  list.contains = function(target) {

    var passedIn = false;
    var searchValue = function(node) {
      if (node.value === target) {
        passedIn = true;
      } else if (node.next !== null) {
        searchValue(node.next);
      }
    };

    searchValue(list.head);
    return passedIn;

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
