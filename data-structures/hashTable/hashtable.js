'use strict';


// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }
//   hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }
//   add(key, value) {
//     let result = this.hash(key);
//     if (!this.data[result]) {
//       this.data[result] = [];
//       console.log(this.data);
//     }
//     this.data[result].push([key, value]);
//   }// O(1)
//   contains(key) {
//     let result = this.hash(key);
//     const currentBucket = this.data[result];
//     console.log(currentBucket);
//     if (currentBucket.length) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }// O(1)
//   keys() {
//     // allows us to iterate through our hash table
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         console.log(this.data[i][0][0]);
//         keysArray.push(this.data[i][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(500);
// myHashTable.add('random wizard', 1000);
// myHashTable.add('random witch', 11);
// myHashTable.add('random beast', 234);

// myHashTable.contains('random wizard', 13);
// myHashTable.contains('random witch');
// myHashTable.contains('random beast');




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

hashTable.add('Leonardo', 'Catchphrase: Radical!');
hashTable.add('Donatello', 'Catchphrase: Bodacious!');
hashTable.add('Raphael', 'Catchphrase: Totally tubular dude!');
hashTable.add('Michelangelo', 'Catchphrase: Gnarly!');
hashTable.add('Master Splinter', 'Catchphrase: Cowabunga!');

// console.log(hashTable.contains('Leonardo'));
console.log(hashTable.contains('Master Spliter'));

// hashTable.keys();

console.log(hashTable);
