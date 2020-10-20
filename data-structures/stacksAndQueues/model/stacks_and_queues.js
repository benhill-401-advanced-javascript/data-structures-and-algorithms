'use strict';

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


class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

module.export = Queue;

