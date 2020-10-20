'use strict';

const Stack = require('./model/stacks_and_queues.js');
const stack = new Stack();

// stack = [];

//push
stack.push('dog');
stack.push('cat');
stack.push('bear');
// console.log(stack, 'stack with push method');

//pop
stack.pop();

//peek
// stack[stack.length - 1];
console.log(stack);
