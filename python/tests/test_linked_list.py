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

