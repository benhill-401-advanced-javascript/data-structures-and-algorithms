from linked_list.linked_list import Node, LinkedList

import pytest

def test_instantiate():
  tester = LinkedList()
  assert(tester.head==None)

