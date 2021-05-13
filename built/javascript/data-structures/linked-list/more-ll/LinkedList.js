var Node = require('../../node-class/node.js');
/**
 * @class Creates a new Linked List class
 * @lends LL.prototype */
var LL = /** @class */ (function () {
    /** Initializes LL with head value set to `null`
     * @constructs */
    function LL() {
        this.head = null;
    }
    /** Creates a new instance of Node class and sets current to head of LL
     * @param {*} value - Takes any value and adds to head of LL
     * @var newHead <- Instantiates new Node that takes value, changes to LL's head
     * @var currentHead <- Stores LL's head */
    LL.prototype.addToHead = function (value) {
        var newHead = new Node(value);
        var currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    };
    LL.prototype.addToTail = function (value) {
        var tail = this.head;
        if (!tail) {
            this.head = new Node(value);
        }
        else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(value));
        }
    };
    LL.prototype.removeHead = function () {
        var removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.value;
    };
    LL.prototype.printList = function () {
        var currentNode = this.head;
        var output = 'head: ';
        while (currentNode !== null) {
            output += currentNode.value + ' ';
            currentNode = currentNode.next;
        }
        output = output.concat('tail');
        // output += 'tail:';
        console.log(output);
    };
    return LL;
}());
module.exports = LL;
