'use strict';
var Node = require('./node.js');
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.root = new Node(value);
        this.count = 1;
    }
    BinaryTree.prototype.size = function () {
        return this.count;
    };
    BinaryTree.prototype.add = function (value) {
        this.count++;
        var newNode = new Node(value);
        var searchTree = function (node) {
            // if value < node.value, go left
            if (value < node.value) {
                // if no left child, append new node
                if (!node.left) {
                    node.left = newNode;
                }
                else {
                    // if left child, look left again
                    searchTree(node.left);
                }
            }
            // if value > node.value, go right
            else if (value > node.value) {
                // if no right child, append new node
                if (!node.right) {
                    node.right = newNode;
                }
                else {
                    // if right child, look right again
                    searchTree(node.right);
                }
            }
        };
        searchTree(this.root);
    };
    BinaryTree.prototype.findMinValue = function () {
        var currentNode = this.root;
        // continue traversing left until no more children
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };
    BinaryTree.prototype.findMaxValue = function () {
        var currentNode = this.root;
        // continue traversing right until no more children
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };
    BinaryTree.prototype.contains = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        // if we look through entire tree and don't find a value
        return false;
    };
    BinaryTree.prototype.inOrder = function () {
        var result = [];
        var recursiveTraverse = function (node) {
            // if left child exists, go left
            if (node.left)
                recursiveTraverse(node.left);
            // capture root node value
            result.push(node.value);
            // if right child exists, go right
            if (node.right)
                recursiveTraverse(node.right);
        };
        recursiveTraverse(this.root);
        return result;
    };
    BinaryTree.prototype.preOrder = function () {
        var result = [];
        var recursiveTraverse = function (node) {
            // capture root node value
            result.push(node.value);
            // if left child exists, go left
            if (node.left)
                recursiveTraverse(node.left);
            // if right child exists, go right
            if (node.right)
                recursiveTraverse(node.right);
        };
        recursiveTraverse(this.root);
        return result;
    };
    BinaryTree.prototype.postOrder = function () {
        var result = [];
        var recursiveTraverse = function (node) {
            // if left child exists, go left
            if (node.left)
                recursiveTraverse(node.left);
            // if right child exists, go right
            if (node.right)
                recursiveTraverse(node.right);
            // capture root node value
            result.push(node.value);
        };
        recursiveTraverse(this.root);
        return result;
    };
    BinaryTree.prototype.breadthFirst = function () {
        var result = [];
        var queue = [];
        queue.push(this.root);
        while (queue.length) {
            var currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            result.push(currentNode.value);
        }
        return result;
    };
    return BinaryTree;
}());
module.exports = BinaryTree;
