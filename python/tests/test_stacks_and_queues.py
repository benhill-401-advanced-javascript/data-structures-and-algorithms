from data_structures.stacks_and_queues.stacks_and_queues import Stack, Queue, InvalidOperationError

import pytest

def test_instantiate_stack():
  tester = Stack()
  assert tester.top == None

def test_instantiate_queue():
  tester = Queue()
  assert tester.front == None

# Can successfully push onto a stack
def test_push_onto_stack():
  stack = Stack()
  stack.push(1)
  actual = stack.top.value
  expected = 1
  assert actual == expected

def test_push_onto_stack_not_none():
  stack = Stack()
  stack.push(1)
  assert stack.top.value != None

# Can successfully push multiple values onto a stack
def test_push_multiple():
  stack = Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  actual = stack.top.value
  expected = 3
  assert actual == expected

def test_push_multiple_fails():
  stack = Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assert stack.top.value != 2

# Can successfully pop off the stack
def test_pop_one():
  stack = Stack()
  stack.push(1)
  actual = stack.pop()
  expected = 1
  assert actual == expected

def test_pop_when_multiple():
  stack = Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.pop()
  stack.pop()
  actual = stack.pop()
  expected = 1
  assert actual == expected

# Can successfully empty a stack after multiple pops
def test_is_empty():
  stack = Stack()
  stack.push(1)
  stack.pop()
  actual = stack.is_empty()
  expected = True
  assert actual == expected

# Can successfully peek the next item on the stack
def test_peek():
  stack = Stack()
  stack.push(1)
  actual = stack.peek()
  expected = 1
  assert actual == expected

# Can successfully instantiate an empty stack
def test_raise_exception_if_empty():
  stack = Stack()
  with pytest.raises(InvalidOperationError) as e:
    stack.peek()

  assert str(e.value) == "Stack is empty!"

# Calling pop or peek on empty stack raises exception

# Can successfully enqueue into a queue

# Can successfully enqueue multiple values into a queue

# Can successfully dequeue out of a queue the expected value

# Can successfully peek into a queue, seeing the expected value

# Can successfully empty a queue after multiple dequeues

# Can successfully instantiate an empty queue

# Calling dequeue or peek on empty queue raises exception
