const Node = require('../../node-class/node.js');


/**
 * @class Creates a new Linked List class
 * @lends LL.prototype */
class LL {
  /** Initializes LL with head value set to `null`
   * @constructs */
  constructor(){
    this.head = null;
  }

  /** Creates a new instance of Node class and sets current to head of LL
   * @param {*} value - Takes any value and adds to head of LL
   * @var newHead <- Instantiates new Node that takes value, changes to LL's head
   * @var currentHead <- Stores LL's head */
  addToHead(value){
    const newHead = new Node(value);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead){
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(value){
    let tail = this.head;
    if (!tail){
      this.head = new Node(value);
    } else {
      while (tail.getNextNode() !== null){
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(value));
    }
  }

  removeHead(){
    const removedHead = this.head;
    if (!removedHead){
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.value;
  }

  printList(){
    let currentNode = this.head;
    let output = 'head: ';
    while (currentNode !== null) {
      output += currentNode.value + ' ';
      currentNode = currentNode.next;
    }
    output = output.concat('tail');
    // output += 'tail:';
    console.log(output);
  }
}

module.exports = LL;
