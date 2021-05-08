const Node = require('../../node-class/node.js');

class LL {
  constructor(){
    this.head = null;
  }

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
