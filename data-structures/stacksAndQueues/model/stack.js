'use strict';

// const node = require('./node.js');

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  push(value) {
    this.size++;
    this.storage[this.size] = value;
  }
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
}
module.exports = Stack;
