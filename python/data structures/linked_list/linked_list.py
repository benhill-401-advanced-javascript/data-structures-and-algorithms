# class Node:
#   def __init__(self, value, next=None):
#     self.value = value
#     self.next_node = next
  
#   def get_next(self):
#     return self.next_node

#   def set_next(self, next):
#     self.next_node = next

#   def get_value(self):
#     return self.value

#   def set_value(self, value):
#     self.value = value

# class LinkedList:
#   def __init__(self, head=None):
#     self.head = head
#     self.size = 0

#   def __str__(self):
#     current_node = self.head
#     string = ''
#     while current_node is not None:
#       f' {{current_node.get_value} ->'
#       current_node = current_node.get_next
#     return f'None'


#   def get_size(self):
#     return self.size

#   def insert(self, value):
#     new_node = Node(value, self.head)
#     self.head = new_node
#     self.size += 1

#   def includes(self, value):
#     current_node = self.head
#     while current_node:
#       if current_node.get_value() == value:
#         return True
#       else:
#         current_node = current_node.get_next()
#     return None

# myList = LinkedList()
# myList.insert(10)
# myList.insert(8)
# myList.insert('Words')
# # print(myList.includes('Words'))
# # print(myList.includes(10))
# print(myList.includes('W'))


# Roger's implementation

# class Node:
#   def __init__(self, value, next=None):
#     self.value = value
#     self.next = next

# class LinkedList:
#   def __init__(self, head, values=None):
#     self.head = head
    
#   def insert(self, value):
#     node = Node(value)

    # if self.head is not None:
    #   node.next = self.head
    # self.head = node


# ll1 = LinkedList.insert(10)

class Node:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next

  def __repr__(self):
    return self.data

class LinkedList:
  def __init__(self, nodes=None):
    self.head = None
    if nodes is not None:
      node = Node(data=nodes.pop(0))
      self.head = node
      for elem in nodes:
        node.next = Node(data=elem)
        node = node.next

  def __repr__(self):
    node = self.head
    nodes = []
    while node is not None:
      nodes.append(node.data)
      node = node.next
    nodes.append("NONE")
    return " -> ".join(nodes)

  def __iter__(self):
    node = self.head
    while node is not None:
      yield node
      node = node.next

  def insert(self, node):
    node.next = self.head
    self.head = node

ll = LinkedList()
ll.insert(Node("{ c }"))
ll.insert(Node("{ b }"))
ll.insert(Node("{ a }"))
print(ll)