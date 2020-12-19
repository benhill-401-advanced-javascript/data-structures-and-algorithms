'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }
  size() {
    return this.count;
  }
  add(value) {
    this.count++;
    let newNode = new Node(value);

    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        } else {
          // if left child, look left again
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
        } else {
          // if right child, look right again
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }
  findMinValue() {
    let currentNode = this.root;

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  findMaxValue() {
    let currentNode = this.root;

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    // if we look through entire tree and don't find a value
    return false;
  }
  inOrder() {
    let result = [];

    const recursiveTraverse = node => {
      // if left child exists, go left
      if (node.left) recursiveTraverse(node.left);
      // capture root node value
      result.push(node.value);
      // if right child exists, go right
      if (node.right) recursiveTraverse(node.right);
    };
    recursiveTraverse(this.root);
    return result;
  }
  preOrder() {
    let result = [];

    const recursiveTraverse = node => {
      // capture root node value
      result.push(node.value);
      // if left child exists, go left
      if (node.left) recursiveTraverse(node.left);
      // if right child exists, go right
      if (node.right) recursiveTraverse(node.right);
    };
    recursiveTraverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];

    const recursiveTraverse = node => {
      // if left child exists, go left
      if (node.left) recursiveTraverse(node.left);
      // if right child exists, go right
      if (node.right) recursiveTraverse(node.right);
      // capture root node value
      result.push(node.value);
    };
    recursiveTraverse(this.root);
    return result;
  }
  breadthFirst() {
    let result = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      result.push(currentNode.value);
    }
    return result;
  }
}

module.exports = BinaryTree;
