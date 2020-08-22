var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {

  var isFound = false;

  var search = function(branch) {

    if (branch.value === target) {
      isFound = true;
      return isFound;
    }

    for (var i = 0; i < branch.children.length; i++) {
      search(branch.children[i]);
    }
  };

  search(this);
  return isFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
    treeMethods.addChild = constant time complexity
    treeMethods.contains = linear time complexity
 */
