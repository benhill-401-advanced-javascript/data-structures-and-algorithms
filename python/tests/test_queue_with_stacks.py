from data_structures.stacks_and_queues.stacks_and_queues import Stack, InvalidOperationError

# Implement a Queue using two Stacks.
# You can't use the pointers from a Queue data structure ie front and rear
# Instead have your front and rear be a new instance of of your Stack data structure

class PseudoQueue:
  def __init__(self):
    self.front = Stack()
    self.rear = Stack()

  # def __str__(self):

  def enqueue(self, value):
    node = self.value
    if self.front.is_empty():
      self.front = node
      self.rear = node
    else:
      self.rear.push = node
      self.rear = node




  def dequeue(self):
    parse = self.rear.__str__
    self.rear.pop.__str__

if __name__ == "__main__":
    q = PseudoQueue()
    print(q)
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())


