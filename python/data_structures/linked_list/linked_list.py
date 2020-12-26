
class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class LinkedList:
  def __init__(self, head=None):
    self.head = head

  def __str__(self):
    output = ''
    current = self.head
    while current is not None:
      output += f'{{ {current.value} }} -> '
      current = current.next
    return output + 'NONE'

  def insert(self, value):
    node = Node(value)

    if self.head is not None:
      node.next = self.head
    self.head = node

  def includes(self, value):
    current = self.head

    while current is not None:
      if current.value == value:
        return True
      current = current.next
      return False

  def append(self, value):
    node = Node(value)

    if not self.head:
      self.head = node
    else:
      current = self.head
      while current.next:
        current = current.next
      current.next = node
    # return node.next

  def insert_before(self, value, new_val):
    if not self.head:
      raise Exception("List is empty!")

    previous = None

    current = self.head
    while current:
      if current.value == value:
        node = Node(new_val)
        node.next = current
        if previous:
          previous.next = node
        else:
          self.head = node
      previous = current
      current = current.next
    return self.head
  
  def insert_after(self, value, new_val):
    current = self.head
    after = None
    while current.value:
      if current.value == value:
        node = Node(new_val)
        after = current.next
        current.next = node
        node.next = after
      return current
    current = current.next
    # return self.head

  def kth_number(self, k):
    current = self.head

    counter = 0
    while current is not None:
      current = current.next
      counter += 1

    if k > counter:
      print(f'{k} is not in Linked List!')
      return
    current = self.head
    for i in range(0, counter - k):
      current = current.next
    return current.value


if __name__ == "__main__":
  new_node = Node(1)
  new_ll = LinkedList()
  print(new_ll)

  link_list = LinkedList(new_node)
  link_list.insert(2)
  link_list.insert(9)
  link_list.insert(8)
  link_list.append(3)
  link_list.append(4)
  link_list.append(5)
  link_list.insert_before(8, 15)
  print(link_list)
  link_list.insert_before(4, 22)
  print(link_list)
  link_list.insert_before(5, 45)
  print(link_list)
  link_list.insert_after(2, 77)
  print(link_list)
  link_list.insert_after(5, 88)
  print(link_list)
  print(link_list.kth_number(4))
  # print(link_list.includes(3))
  # print(link_list.includes(4))
  # print(new_ll1)


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
#   def __init__(self, head):
#     self.head = None
    
#   def insert(self, value):
#     node = Node(value)

#     if self.head is not None:
#       node.next = self.head
#     self.head = node


# ll = LinkedList(head=None)
# ll.insert(Node(10))

# class Node:
#   def __init__(self, data, next=None):
#     self.data = data
#     self.next = next

#   def __repr__(self):
#     return self.data

# class LinkedList:
#   def __init__(self, nodes=None):
#     self.head = None
#     if nodes is not None:
#       node = Node(data=nodes.pop(0))
#       self.head = node
#       for elem in nodes:
#         node.next = Node(data=elem)
#         node = node.next

#   def __repr__(self):
#     node = self.head
#     nodes = []
#     while node is not None:
#       nodes.append(node.data)
#       node = node.next
#     nodes.append("NONE")
#     return " -> ".join(nodes)

#   def __iter__(self):
#     node = self.head
#     while node is not None:
#       yield node
#       node = node.next

#   def insert(self, node):
#     node.next = self.head
#     self.head = node

# # WHAT IF THE LINKED LIST IS EMPTY?????

# ll = LinkedList()
# ll.insert(Node("{ c }"))
# ll.insert(Node("{ b }"))
# ll.insert(Node("{ a }"))
# print(ll)
