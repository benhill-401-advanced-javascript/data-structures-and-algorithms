'use strict';

/** A module for Node class
 * @module Node
*/

/** Creates a new Node instance
 * @class
 * @lends
 * */
class Node {
  /** Initializes Node values default to `null`
   * @constructs
   * @param {Object} value
   */
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  /** Sets next node if instance of Node or Node is `null`
   * @param {node} node
   */
  setNextNode(node){
    if (node instanceof Node || node === null){
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class');
    }
  }

  /** Sets previous node if instance of Node or Node is `null`
   * @param {node} node
   */
  setPreviousNode(node) {
    if (node instanceof Node || node === null){
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class');
    }
  }

  /** Returns the value of next node
   * @returns {value} next value
   */
  getNextNode(){
    return this.next;
  }

  /** Returns the value of previous node
   * @returns {value} previous value
   */
  getPreviousNode() {
    return this.previous;
  }
}



// const newNode = new Node('I am an instance of a Node!');
// const secondNode = new Node('I am the next node!');
// const thirdNode = new Node('I am a node and I only know about myself!');

// newNode.setNextNode(secondNode);
// secondNode.setNextNode(thirdNode);
// thirdNode.getPreviousNode(secondNode);

// console.log(newNode);

module.exports = Node;
module.exports = {
  plugins: ['plugins/markdown']
};
