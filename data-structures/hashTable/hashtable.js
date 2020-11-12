'use strict';

const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  add(key, value) {
    let index = hash(key, this.size);
    console.log(index);
    this.buckets[index].set(key, value);
    // set is built in method on map object from constructor
  }
  contains(key) {
    let index = hash(key, this.size);
    console.log(index);
    return this.buckets[index].get(key);
  }
  remove(key) {
    let index = hash(key, this.size);
    let deleted = this.buckets[index].get(key);
    console.log(deleted);
    this.buckets[index].delete(key);
    return deleted;
  }
}


const hashTable = new HashTable();

hashTable.add('Leonardo', 'Radical!');
hashTable.add('Donatello', 'Bodacious!');
hashTable.add('Raphael', 'Totally tubular dude!');
hashTable.add('Michelangelo', 'Gnarly!');
hashTable.add('Master Splinter', 'Cowabunga!');

// console.log(hashTable.contains('Leonardo'));
console.log(hashTable.contains('Master Splinter'));

// hashTable.keys();

console.log(hashTable);


