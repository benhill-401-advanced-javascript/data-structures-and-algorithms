'use strict';

// create a node class that has properties for the value sotred in the node, and a pointer to the next node.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
// Each node will contain a value and next property

module.exports = Node;
