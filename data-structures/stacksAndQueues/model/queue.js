'use strict';

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

const queue = new Queue();

queue.enqueue('stuff');
queue.enqueue('more stuff');
queue.enqueue('and more stuff');
queue.enqueue('more more stuff');
console.log(queue);

queue.dequeue();
queue.dequeue();
// queue.dequeue();

console.log(queue);

module.export = Queue;
