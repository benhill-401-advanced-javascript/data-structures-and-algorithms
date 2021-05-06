class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  setNextNode(node){
    if (!(node instanceof Node)){
      throw new Error('Next node must be a member of the Node class');
    }
    this.next = node;
  }

  getNextNode(){
    return this.next;
  }
}

// const newNode = new Node('I am an instance of a Node!');
// const secondNode = new Node('I am the next node!');
// const thirdNode = new Node('I am a node and I only know about myself!');

// newNode.setNextNode(secondNode);
// secondNode.setNextNode(thirdNode);
// thirdNode.getNextNode();

// console.log(newNode);

module.exports = Node;
