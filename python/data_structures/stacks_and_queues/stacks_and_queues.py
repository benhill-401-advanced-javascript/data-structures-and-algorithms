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
  def __init__(self, front=None, rear=None):
    self.front = front
    self.rear = rear
  
  def __str__(self):
    output = ''
    current = self.front
    while current:
      output += f'{{ {current.value} }} -> '
      current = current.next
    return output + 'NONE'

  def enqueue(self, value):
    node = Node(value)
    if self.is_empty():
      self.front = node 
      self.rear = node
    else:
      self.rear.next = node
      self.rear = node

  def dequeue(self):
    if self.is_empty():
      raise InvalidOperationError("Cannot dequeue from empty queue!")
    node = self.front
    self.front = self.front.next
    return node.value

  def peek(self):
    if self.is_empty():
      raise InvalidOperationError("Peeking from an empty queue!")
    return self.front.value

  def is_empty(self):
    if self.front == None:
      return True
    else:
      return False

  def peek(self):
    if self.is_empty():
      raise InvalidOperationError("Peeking from an empty queue!")
    return self.front.value

  def is_empty(self):
    if self.front == None:
      return True


if __name__ == "__main__":
  new_node = Node(1)
  # stack = Stack()
  queue = Queue()
  # print(stack)
  print(queue)

  # stack.push(2)
  # stack.push(1)
  # stack.push('TOP')
  # print(stack)

  queue.enqueue('FRONT')
  queue.enqueue(2)
  queue.enqueue(1)
  queue.enqueue('BACK')
  print(queue)


  # stack.pop()
  # stack.pop()
  # print(stack)
  queue.dequeue()
  print(queue)

  print(queue.peek())


