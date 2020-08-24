'use strict';

const Node = require('./node.js');

// Utilize the single-responsibility principle. This means each node points to the next node. 
// If the head node is not passed, the head is initialized to null.

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(addVal) {
    let node = new Node(addVal);

    node.next = this.head;
    this.head = node;

    return this.head;
  }
  includes(searchVal) {
    let current = this.head;

    while (current != null) {
      if (current.value === searchVal) {
        console.log(true);
        return true;
      }
      current = current.next;
    }
    console.log(false);
    return false;
  }
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      if (current !== null) {
        string = string + '{' + current.value + '}';
        current = current.next;
      }
      if (current == null) {
        string = string + 'null';
      }
    }
    console.log(string);
  }
}

module.exports = LinkedList;