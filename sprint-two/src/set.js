var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = 'str';
};

setPrototype.contains = function(item) {
  if (this.storage[item]) {
    return true;
  } else {
    return false;
  }
};


setPrototype.remove = function(item) {

  if (this.storage[item]) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  all three functions are constant time complexity
 */
