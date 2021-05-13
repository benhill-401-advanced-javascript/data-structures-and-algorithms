'use strict';
var hash = function (key, size) {
    var hashedKey = 0;
    for (var i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i);
    }
    return hashedKey % size;
};
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.size = 20;
        this.buckets = Array(this.size);
        for (var i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }
    HashTable.prototype.add = function (key, value) {
        var index = hash(key, this.size);
        console.log(index);
        this.buckets[index].set(key, value);
        // set is built in method on map object from constructor
    };
    HashTable.prototype.contains = function (key) {
        var index = hash(key, this.size);
        console.log(index);
        return this.buckets[index].get(key);
    };
    HashTable.prototype.remove = function (key) {
        var index = hash(key, this.size);
        var deleted = this.buckets[index].get(key);
        console.log(deleted);
        this.buckets[index].delete(key);
        return deleted;
    };
    return HashTable;
}());
var hashTable = new HashTable();
hashTable.add('Leonardo', 'Radical!');
hashTable.add('Donatello', 'Bodacious!');
hashTable.add('Raphael', 'Totally tubular dude!');
hashTable.add('Michelangelo', 'Gnarly!');
hashTable.add('Master Splinter', 'Cowabunga!');
// console.log(hashTable.contains('Leonardo'));
console.log(hashTable.contains('Master Splinter'));
console.log(hashTable);
