'use strict';

const BinaryTree = require('./model/tree.js');
// Root node declared in new instance of tree
const tree = new BinaryTree(45);

tree.add(2);
tree.add(36);
tree.add(74);
tree.add(12);
tree.add(5);
tree.add(23);
tree.add(8);
console.log(tree);

// Checks to see if a value is present in tree
// Change values in contains method paranthesis to perform check
console.log(tree.contains(36), ' is present');
console.log(tree.contains(7987), ' is not present');

// Checks how many nodes are in tree
console.log(tree.size(), ' nodes in your tree');

// Checks the min and max values in tree
console.log(tree.findMinValue(), ' is the smallest node');
console.log(tree.findMaxValue(), ' is the highest node');

// Depth first methods

// left, root, right
console.log(tree.inOrder(), 'Depth first in order');

// root, left, right
console.log(tree.preOrder(), 'Depth first pre order');

// left, right, root
console.log(tree.postOrder(), 'Depth first post order');

// Breadth first method
console.log(tree.breadthFirst(), 'Breadth first');

