class Node(object):
  def __init__(self, data, next=None):
    self.data = data
    self.next_node = next
  
  def get_next(self):
    return self.next_node

  def set_next(self, next):
    self.next_node = next

  def get_data(self):
    return self.data

  def set_data(self, data):
    self.data = data

class LinkedList(object):
  def __init__(self, head=None):
    self.head = head
    self.size = 0

  def get_size(self):
    return self.size

  def insert(self, data):
    new_node = Node(data, self.head)
    self.root = new_node
    self.size += 1

  def includes(self, data):
    current_node = self.head
    while current_node:
      if current_node.get_data() == data:
        return data
      else:
        current_node = current_node.get_next()
    return None

myList = LinkedList()
myList.insert(10)
myList.insert(8)
myList.insert('Words')
print(myList.includes(8))
