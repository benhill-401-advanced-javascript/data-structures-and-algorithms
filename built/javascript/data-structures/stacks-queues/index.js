'use strict';
var Stack = require('./model/stack.js');
var Queue = require('./model/queue.js');
var stack = new Stack();
var queue = new Queue();
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
