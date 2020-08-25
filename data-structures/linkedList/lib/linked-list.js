'use strict';

const Node = require('./node.js');


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
    let result = searchVal;

    while (current !== null) {
      if (current.value === searchVal) {
        console.log(result, 'IS in your list');
        return true;
      }
      current = current.next;
    }
    console.log(result, 'IS NOT in your list');
    return false;
  }
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      if (current !== null) {
        string = `${string} { ${current.value} } ->`;
        current = current.next;
      }
      if (current === null) {
        string = `${string} ${null}`;
      }
    }
    console.log(string);
  }
}

module.exports = LinkedList;
