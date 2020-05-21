/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function (key, value) {
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (!bucket) {
      bucket = [];
    }
    var duplicated = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        duplicated = true;
      }
    }
    if (!duplicated) {
      bucket.push([key, value]);
      size++;
      if (size > 0.75 * storageLimit) {
        result.rehash(storageLimit * 2);
      }
    }
    storage[index] = bucket;
    return storage;
  };

  result.retrieve = function (key) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket === undefined) {
      return undefined;
    }
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    console.log('Item not exist');
    return undefined;
  };

  result.remove = function (key) {
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket === undefined) {
      return undefined;
    }
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        size--;
        if (size < storageLimit * 0.25) {
          result.rehash(storageLimit / 2);
        }
      }
    }
    return storage;
  };

  result.rehash = function (newLimit) {
    var oldStorage = storage;
    storageLimit = newLimit;
    storage = [];
    size = 0;
    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i];
      if (!bucket) {
        continue;
      }
      for (var j = 0; j < bucket.length; j++) {
        var item = bucket[j];
        result.insert(item[0], item[1]);
      }
    }
  };

  return result;
};

var hashTable = makeHashTable();
hashTable.insert("Spielberg's best movie", 'Jaws');
hashTable.remove("Spielberg's best movie");
var value = hashTable.retrieve("Spielberg's best movie");
console.log(value);
// console.log('')
