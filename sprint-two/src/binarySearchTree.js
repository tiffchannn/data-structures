var BinarySearchTree = function(value) {

  //model:
  /*
  {
    value: val1,
    left: {
      value: val2,
      left:{value:, left:, right:},
      right: {}
    },
    right: {
      value: val2,
      left:{},
      right: {}
    }
  }
  */


  // create binaryTree set to {}
  var binaryTree = {};
  // create binaryTree value
  binaryTree.val = value;

  // .left property, a binary search tree (BST) where all values are lower than the current value.
  // create leftChild property
  binaryTree.left = null;

  //.right property, a BST where all values are higher than the current value.
  // create rightChild property
  binaryTree.right = null;

  //.insert() method, which accepts a value and places it in the tree in the correct position.
  binaryTree.insert = function(value) {
    // instantiate a newNode (which is a new Tree)
    var newNode = {};
    newNode.val = value;
    newNode.right = null;
    newNode.left = null;

    //if binaryTree's val is less than value (newNode's val)
    //then look down binaryTree's right branch
    //if right branch empty, set with newNode value
    //if right branch not empty, check if right branch val is less or more than value (newNode's val) . . .
    //if binaryTree's val is greater than value (newNode's val)
    //then look down binaryTree's left branch
    //if left branch empty, set with newNode value
    //if left branch not empty, check if left branch val is less or more than value (newNode's val) . . .

    if (binaryTree.val < newNode.val) {
      if (binaryTree.right === null) {
        binaryTree.right = newNode;
      }
      if (binaryTree.right) {
        if (binaryTree.right.val < newNode.val) {
          binaryTree.right = newNode.val;
        }
      }
    }
    if (binaryTree.val > newNode.val) {
      if (binaryTree.left === null) {
        binaryTree.left = newNode;
      }
      if (binaryTree.left.val < newNode.val) {
        binaryTree.left = newNode.val;
      }
    }

    // else
    // node.left = node.value

    // create searchTree function

    // {value: 5, right: null, left: {value: 2, right: {value: 3, right: null, left: null}, left: null}}

    // var searchTree = function (node) {
    //   // if node is empty, then set node to newNode
    //   if (node === null) {
    //     node = newNode;
    //   } else {
    //     // if the binaryTree value is less than newNode value, place new Node on binaryTree's right property
    //     if (node.val < value) {
    //       //recurse node.right?
    //       console.log('node value is:', node.val);
    //       searchTree(node.right)
    //     } else {
    //       searchTree(node.left)
    //     }
    //   }
    // }
    // searchTree(binaryTree);
  };

  //.contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  binaryTree.contains = function(target) {
    // create another search function?

    // set isFound boolean flag to false
    var isFound = false;

    var containValue = function (node) {
    // if binaryTree has the current value - on either right or left branch
      if (node.val === target) {
        isFound = true;
        return isFound;
      } else {
        isFound = false;
      }

      // isFound = true
    // else
      // isFound =  false
    };
  };

  // .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  binaryTree.depthFirstLog = function() {

  };

  // retrun binaryTree
  return binaryTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
