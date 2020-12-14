# Stacks and Queues

Stack is last in first out (LIFO). The top node is the last node and just like a stack of dishes, you wouldn't want pull out a dish from the stack except from the top. Likewise when you add to the stack you will also add to the top.
A Queue is first in first out (FIFO). Enqueue will add to the queue, Dequeue will remove from the queue.
I'll use javascript's built in array methods.

## Challenge

- Create a **Node** class that has properties for the value stored in the Node, and a pointer to the next node
- Create a **Stack** class that has a _top property_. it Creates an empty Stack when instantiated
  - This object should:
    - Be aware of a default empty value assigned to **top** when the stack is created
    - Define a method called **push** which takes any value as an argument and adds a new node with that value to the **top** of the stack with _O(1)_ Time performance
    - Define a method called **pop** that _does not take any argument_, removes the node from the top of the stack, and returns the node’s value.
      - _Should raise exception when called on empty stack_
  - Define a method called **peek** that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
    - Should raise exception when called on empty stack
  - Define a method called **isEmpty** that takes no argument, and _returns a boolean indicating whether or not the stack is empty_.
- Create a **Queue** class that has a _front property_. It creates an empty Queue when instantiated.
  - This object should:
    - Be aware of a default empty value assigned to front when the queue is created.
    - Define a method called **enqueue** which takes any value as an argument and adds a _new node_ with that value to the back of the queue with an _O(1) Time performance_.
    - Define a method called **dequeue** that _does not take any argument_, removes the node from the front of the queue, and returns the node’s value.
      - Should raise exception when called on empty queue
    - Define a method called **peek** that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
      - Should raise exception when called on empty queue
    - Define a method called **isEmpty** that takes no argument, and returns a boolean indicating whether or not the queue is empty.
- Be sure to follow your languages best practices for naming conventions.
- You have access to the Node class and all the properties on the **_Linked List class_**.

## Structure and Testing

- Utilize Single-responsibility principle
- Any methods you write should be clean, reusable, abstract component parts to the whole challenge.
- You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

- Write tests to prove the following functionality:

1. Can successfully push onto a stack
1. Can successfully push multiple values onto a stack
1. Can successfully pop off the stack
1. Can successfully empty a stack after multiple pops
1. Can successfully peek the next item on the stack
1. Can successfully instantiate an empty stack
1. Calling pop or peek on empty stack raises exception
1. Can successfully enqueue into a queue
1. Can successfully enqueue multiple values into a queue
1. Can successfully dequeue out of a queue the expected value
1. Can successfully peek into a queue, seeing the expected value
1. Can successfully empty a queue after multiple dequeues
1. Can successfully instantiate an empty queue
1. Calling dequeue or peek on empty queue raises exception

## API

<!-- Description of each method publicly available to your Stack and Queue-->
