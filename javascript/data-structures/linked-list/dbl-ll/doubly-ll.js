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


  /** Finds and removes the head node by updating the value of the node to the heads previous node, 
   * which would be `null`
   * @returns {removedHead} removedHead.value
   */
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.value;
  }

  /** Finds and removes the tail node by updating the value of the node to the tails next node, which 
   * would be `null`
   * @returns {removedTail} removedTail.value
   */
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.value;
  }

  /** Finds and removes any given node by value
   * @param {value} value
   * @returns {nodeToRemove} nodeToRemove
   */
  removeByData(value) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }



  /** Prints linked list */
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.value + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLL;
