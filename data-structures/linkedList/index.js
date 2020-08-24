'use strict';

const LinkedList = require('./lib/linked-list.js');
let list = new LinkedList();

list.insert('seven');
list.insert('Last');
list.insert(true);
list.insert('severally');
list.insert(10);
list.includes('seven');
list.includes('stupid');
list.includes(5);
list.toString();

console.log('constructed list:', list);