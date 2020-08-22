
// write in pseudoclassical style
// key value pairs = node
// {key: []}
// value 6
// {6: []}
// value 7, linked to 6
// {7: []}
//has edge, linked to 6
// {6: [7]}
// {7: [6]}

//{6:[7, 3], 7:[6], 3:[6]}

// Instantiate a new graph
var Graph = function() {
  // create a storage obj
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create the value for that node, set to empty array
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  } else {
    return false;
  }
};

//{6:[7, 3], 7:[6], 3:[6]}

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // look up linked nodes
  // loop through array
  for (var i = 0; i < this.storage[node].length; i++) {
    // for each referenced node, access its array
    var keyOfOtherNode = this.storage[node][i];
    // console.log('otherNodeArr indexOf: ', otherNodeArray.indexOf(node));
    if (this.storage[keyOfOtherNode].indexOf(node) > -1) {
      this.storage[keyOfOtherNode].splice(this.storage[keyOfOtherNode].indexOf(node), 1);
    }

  }
  // delete the whole node
  delete this.storage[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if fromNode and toNode have specified value
  if (this.storage[fromNode].includes(toNode)) {
  // return true
    return true;
  } else {
  // return false
    return false;
  }

};


//{6:[7, 3], 7:[6], 3:[6]}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // identify the fromNode and add (push) toNode into fromNode's array of connected Nodes
  this.storage[fromNode].push(toNode);
  // identify the toNode and add(push) fromNode into toNode's array of connected Nodes
  this.storage[toNode].push(fromNode);
};

//{6:[7, 3], 7:[6], 3:[6]}
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if fromNode and toNode have same edge/connection
  if (this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode)) {
    // remove value from both nodes arrays
    var fromNodesArray = this.storage[fromNode];
    fromNodesArray.splice(fromNodesArray.indexOf(toNode), 1);
    var toNodesArray = this.storage[toNode];
    toNodesArray.splice(toNodesArray.indexOf(toNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop through the keys in storage object
  for (var key in this.storage) {
    // run the callback on each node at that key
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  "addNode" = constant,
  "contains" = constant,
  "removeNode" = linear,
  "addEdge" = contant,
  "hasEdge" = constant,
  "removeEdge" = constant,
  "forEachNode" = linear
 */


