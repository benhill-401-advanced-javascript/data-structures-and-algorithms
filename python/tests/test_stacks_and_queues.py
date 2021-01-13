from data_structures.stacks_and_queues.stacks_and_queues import Stack, Queue, InvalidOperationError

import pytest

# Can successfully instantiate an empty stack
def test_instantiate_stack():
  stack = Stack()
  assert stack.top == None

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

def test_raise_exception_when_peeking():
  stack = Stack()
  with pytest.raises(InvalidOperationError) as e:
    stack.peek()

  assert str(e.value) == "Peeking from an empty stack!"

# Calling pop or peek on empty stack raises exception
def test_raise_exception_when_popping():
  stack = Stack()
  with pytest.raises(InvalidOperationError) as e:
    stack.pop()

  assert str(e.value) == "Popping from an empty stack!"

def test_instantiate_queue():
  queue = Queue()
  assert queue.front == None

# Can successfully enqueue into a queue
def test_enqueue_into_queue():
  queue = Queue()
  queue.enqueue(1)
  actual = queue.front.value
  expected = 1
  assert actual == expected

# Can successfully enqueue multiple values into a queue

# Can successfully dequeue out of a queue the expected value

# Can successfully peek into a queue, seeing the expected value

# Can successfully empty a queue after multiple dequeues

# Can successfully instantiate an empty queue

# Calling dequeue or peek on empty queue raises exception
