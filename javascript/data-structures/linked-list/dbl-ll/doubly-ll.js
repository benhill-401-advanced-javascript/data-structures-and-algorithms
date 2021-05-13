'use strict';

const Node = require('../../node-class/node');

/** Creates a new DoublyLL instance
 * @module
*/

/** Doubly linked list class
 * @class
 */
class DoublyLL {
  /** Initializes linked list with head and tail values to `null`
   * @constructor
   */
  constructor(){
    this.head = null;
    this.tail = null;
  }

  /** Adds new nodes to head of linked list
   * @param {DoublyLL} value
   * @returns {Node} new head
   */
  addToHead(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  /** Adds new nodes to tail of linked list
   * @param {DoublyLL} value
   * @returns {Node} new tail
   */
  addToTail(value) {
    const newTail = new Node(value);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setPreviousNode(newTail);
      newTail.setNextNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLL;
