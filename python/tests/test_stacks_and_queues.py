from data_structures.stacks_and_queues.stacks_and_queues import Stack, Queue

import pytest

def test_instantiate_stack():
  tester = Stack()
  assert tester.top == None

def test_instantiate_queue():
  tester = Queue()
  assert tester.front == None

# Can successfully push onto a stack

# Can successfully push multiple values onto a stack

# Can successfully pop off the stack

# Can successfully empty a stack after multiple pops

# Can successfully peek the next item on the stack

# Can successfully instantiate an empty stack

# Calling pop or peek on empty stack raises exception

# Can successfully enqueue into a queue

# Can successfully enqueue multiple values into a queue

# Can successfully dequeue out of a queue the expected value

# Can successfully peek into a queue, seeing the expected value

# Can successfully empty a queue after multiple dequeues

# Can successfully instantiate an empty queue

# Calling dequeue or peek on empty queue raises exception
