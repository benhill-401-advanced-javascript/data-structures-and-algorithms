


class Node {

  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node){
    if (node instanceof Node || node === null){
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class');
    }
  }


  setPreviousNode(node) {
    if (node instanceof Node || node === null){
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class');
    }
  }


  getNextNode(){
    return this.next;
  }


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

