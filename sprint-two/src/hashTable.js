

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create bucket array
  // create tuple array
  // push tuple into bucket
  // push k into tuple
  // push v into tuple
  var tuple = [k, v];
  if (this._storage[index] === undefined) {
    var bucket = [];
    this._storage[index] = bucket;
    bucket.push(tuple);
  } else {
  // loop through bucket
  // search for any tuple that has same key as tuple
    for (var i = 0; i < this._storage[index].length; i++) {
      var existingTuple = this._storage[index][i];
      if (existingTuple[0] === tuple[0]) {
        //find out the index of the existing Tuple
        //splice out the existing Tuple and in the newTuple
        var tupleIndex = this._storage[index].indexOf(existingTuple);
        this._storage[index].splice(tupleIndex, 1, tuple);
      }
    }
    this._storage[index].push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // given the index of the bucket
  // access the bucket
  // loop through any tuples, examining keys (at index 0 of tuple)
  //if match, return index 1 of tuple
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      var tuple = this._storage[index][i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //loop through the bucket to find the index of the bucket where the tuple is located
  //delete the tuple by using slice on the bucket at the index where it was located

  for (var i = 0; i < this._storage[index].length; i++) {
    var tuple = this._storage[index][i];
    if (tuple[0] === k) {
      this._storage[index].splice(i, 1);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 all three functions are between constant and linear time complexity
 */


