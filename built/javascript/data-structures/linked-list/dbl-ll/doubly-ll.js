var Node = require('../../node-class/node.js');
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.addToHead = function (value) {
        var newHead = new Node(value);
    };
    DoublyLinkedList.prototype.printList = function () {
        var currentNode = this.head;
        var output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    };
    return DoublyLinkedList;
}());
module.exports = DoublyLinkedList;
