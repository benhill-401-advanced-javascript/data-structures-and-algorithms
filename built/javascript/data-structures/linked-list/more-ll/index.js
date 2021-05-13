var LL = require('./LinkedList.js');
var testList = new LL();
testList.addToHead(3);
testList.addToHead(8);
testList.addToTail(2);
testList.removeHead();
testList.addToTail(4);
testList.removeHead();
console.log(testList.head.value);
