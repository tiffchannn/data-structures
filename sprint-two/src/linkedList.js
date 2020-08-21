var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // {
  //   head: null
  //   tail: null,
  // }

  list.addToTail = function(value) {
    // takes a value and adds it to the end of the list
    //create a node
    var newNode = Node(value);
    // if the linkedList is empty
      //we need both the head and tail to point to new node
    // if the linkedList is not empty (so has a node and the tail already points to it)
      // first attach the new node to the current last node
      // repoint the tail at the new node (now the last node)

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }

    if (list.head !== null && list.tail !== null) {
      //list.tail === previousNode
      //list.tail.next = newNode

      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    // removes the first node head from the list and returns its value
    // if a node at the list head
      // identify what will become the node at the list head (current second node)
      // store the value of the current node at the head
      // redirect head to point at second node

      //return the stored value on the current head node

    if (list.head !== null) {
      var node1 = list.head;
      var node2 = node1.next;
      var storage = node1.value;
      list.head = node2;
    }
    return storage;

  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the passed-in value is in the linked list
    // set passedIn as boolean to false
    // create search function to see if list contains value
      //search first node and if matches, flip boolean flag to true;
      //if not match
      //recurse search function on next node
    //call search function on the list.head
    //return boolean flag

    var passedIn = false;
    var searchValue = function(node) {
      if (node.value === target) {
        passedIn = true;
      } else if (node.next !== null) {
        searchValue(node.next);
      }
    }
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
