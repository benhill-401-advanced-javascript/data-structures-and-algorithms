'use strict';

const Stack = require('./model/stack.js');
const Queue = require('./model/queue.js');
const stack = new Stack();
const queue = new Queue();

console.log(queue, 'value of queue');

queue.enqueue('FOOTBALL');


//push
stack.push('SEA');
stack.push('HAWKS');
stack.push('dawgz');
stack.push('da-bears');
console.log(stack, 'stack with push method');

//pop
stack.pop();
// console.log(stack, 'stack after pop has removed');

//peek
stack.peek();
console.log(stack, 'peek sees nodes that are there, pop removed one');

