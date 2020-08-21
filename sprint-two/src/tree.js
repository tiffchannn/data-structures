var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  //use extend to pull in treeMethods
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  // set tree = value
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node/newTree or any descendant/child node

  // create isFound flag to boolean false
  var isFound = false;
  // create function to check if value is found within newTree
  var search = function(branch) {
    // if found, return true
    if (branch.value === target) {
      isFound = true;
      return isFound;
    }
    //loop through children
    for (var i = 0 ; i < branch.children.length; i++) {
      // use recursion on each child
      search(branch.children[i]);
    }
  }
  //call the search function on newTree (this)
  search(this);
  // return isFound
  return isFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
    treeMethods.addChild = constant time complexity
    treeMethods.contains = linear time complexity
 */
