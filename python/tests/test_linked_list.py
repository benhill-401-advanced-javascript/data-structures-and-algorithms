from data_structures.linked_list.linked_list import Node, LinkedList

import pytest

# can successfully instantiate an empty linked list
def test_instantiate():
  tester = LinkedList()
  assert tester.head == None

# can properly insert into the linked list
# The head property will properly point to the first node in the linked list
def test_insert():
  tester = LinkedList()
  tester.insert(10)
  assert tester.head.value == 10

# Can properly insert multiple nodes into the linked list
def test_insert_two_items():
  tester = LinkedList()
  tester.insert(10)
  tester.insert(9)
  assert tester.head.next.value == 10

def test_insert_two_items_fail():
  tester = LinkedList()
  tester.insert(10)
  tester.insert(9)
  assert tester.head.next.value != 9 

# Will return true when finding a value within the linked list that exists
def test_includes_two_pass():
  tester = LinkedList()
  tester.insert(2)
  actual = tester.includes(2)
  assert actual == True

# Will return false when searching for a value in the linked list that does not exist
def test_includes_two_fail():
  tester = LinkedList()
  tester.insert(2)
  actual = tester.includes(3)
  assert actual == False

def test_includes_two_three_pass():
  tester = LinkedList()
  tester.insert(2)
  tester.insert(3)
  actual = tester.includes(2)
  actual = tester.includes(3)
  assert actual == True

def test_includes_two_three_fail():
  tester = LinkedList()
  tester.insert(2)
  tester.insert(3)
  actual = tester.includes(8)
  actual = tester.includes(7)
  assert actual == False

def test_insert_string():
  tester = LinkedList()
  tester.insert('String')
  assert tester.head.value == 'String'

# Can properly return a collection of all the values that exist in the linked list
def test_return_collection():
  tester = LinkedList()
  tester.insert(3)
  tester.insert(2)
  tester.insert(1)
  expected = '{ 1 } -> { 2 } -> { 3 } -> NONE'
  actual = str(tester)
  assert actual == expected

# Can successfully add a node to the end of the linked list
def test_can_append():
  tester = LinkedList()
  tester.append(1)
  tester.append(2)
  assert tester.head.next.value == 2

def test_cannot_append():
  tester = LinkedList()
  tester.append(1)
  tester.append(3)
  assert tester.head.next.value != 2

# Can successfully add multiple nodes to the end of a linked list
def test_can_append_multiple():
  tester = LinkedList()
  tester.insert(1)
  tester.append(2)
  tester.append(3)
  expected = '{ 1 } -> { 2 } -> { 3 } -> NONE'
  actual = str(tester)
  assert actual == expected

# Can successfully insert a node before a node located i the middle of a linked list
def test_can_insert_before_middle():
  tester = LinkedList()
  tester.insert(4)
  tester.insert(3)
  tester.insert(2)
  tester.insert(1)
  tester.insert_before(3, "Middle")
  assert tester

# Can successfully insert a node before the first node of a linked list
def test_can_insert_before_first():
  tester = LinkedList()
  tester.insert(4)
  tester.insert(3)
  tester.insert(2)
  tester.insert(1)
  tester.insert_before(1, "Before first")
  assert tester

# Can successfully insert after a node in the middle of the linked list
def test_can_insert_after_middle():
  tester = LinkedList()
  tester.insert(4)
  tester.insert(3)
  tester.insert(2)
  tester.insert(1)
  tester.insert_after(2, "Middle")
  assert tester

# Can successfully insert a node after the last node of the linked list
def test_can_insert_after_last():
  tester = LinkedList()
  tester.insert(4)
  tester.insert(3)
  tester.insert(2)
  tester.insert(1)
  tester.insert_after(4, 5)
  assert tester

# Where k is greater than the length of the linked list

# Where k and the length of the list are the same

# Where k is not a positive integer

# Where the linked list is of a size 1

# “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
