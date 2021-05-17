'use strict';
var Node = require('./node.js');
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.append = function (value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    };
    LinkedList.prototype.insert = function (addVal) {
        var node = new Node(addVal);
        node.next = this.head;
        this.head = node;
        return this.head;
    };
    LinkedList.prototype.includes = function (searchVal) {
        var current = this.head;
        var result = searchVal;
        while (current !== null) {
            if (current.value === searchVal) {
                console.log(result, 'IS in your list');
                return true;
            }
            current = current.next;
        }
        console.log(result, 'IS NOT in your list');
        return false;
    };
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var string = '';
        while (current) {
            if (current !== null) {
                string = string + " { " + current.value + " } ->";
                current = current.next;
            }
            if (current === null) {
                string = string + " " + null;
            }
        }
        console.log(string);
    };
    LinkedList.prototype.insertBefore = function (value, newVal) {
        var current = this.head;
        var previous;
        while (current.next) {
            if (current.value)
                if (current.value === value) {
                    var node = new Node(newVal);
                    node.next = previous.next;
                    previous.next = node;
                    console.log('previous: ', previous);
                    return this;
                }
            previous = current;
            current = current.next;
        }
    };
    LinkedList.prototype.insertAfter = function (value, newVal) {
        var current = this.head;
        while (current.next) {
            if (current.value === value) {
                var node = new Node(newVal);
                var nextNode = current.next;
                current.next = node;
                node.next = nextNode;
                return this;
            }
            current = current.next;
        }
    };
    return LinkedList;
}());
module.exports = LinkedList;
