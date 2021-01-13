class InvalidOperationError(BaseException):

  pass

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class Stack:
  def __init__(self, top=None):
    self.top = top

  def __str__(self):
    output = ''
    current = self.top
    while current is not None:
      output += f'{{ {current.value} }} -> '
      current = current.next
    return output + 'NONE'

  def is_empty(self):
    if self.top == None:
      return True
  
  def push(self, value):
    node = Node(value)
    node.next = self.top
    self.top = node

  def pop(self):
    if self.is_empty():
      raise InvalidOperationError("Popping from an empty stack!")
    node = self.top
    self.top = self.top.next
    return node.value

  def peek(self):
    if self.is_empty():
      raise InvalidOperationError("Peeking from an empty stack!")
    return self.top.value


class Queue:
  def __init__(self):
    self.front = None
    self.rear = None

  def enqueue(self):
    pass

  def dequeue(self):
    pass

  def peek(self):
    pass

  def is_empty(self):
    pass


if __name__ == "__main__":
  new_node = Node(1)
  stack = Stack()
  queue = Queue()
  print(stack)

  stack.push(2)
  stack.push(1)
  stack.push('TOP')
  print(stack)

  stack.pop()
  stack.pop()
  print(stack)


