'use strict';

const StackAndQueue = require('./model/stacks_and_queues.js');
const stack = new StackAndQueue();

// stack = [];

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

const queue = new StackAndQueue();
console.log(queue, 'value of queue');

queue.enqueue('FOOTBALL');
