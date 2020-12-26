# Singly Linked List
This singly linked list implementation will be a classic linked list with a head node that traverses through each node until it reaches the tail node. It will be implemented in three phases
- [Click here for code implementation](linked_list.py)
- [Click here for tests](../../tests/test_linked_list.py)

### Phase One:
- [x] Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- [x] Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  - [x] Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  - [x] Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  - [x] Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    - [x] "{ a } -> { b } -> { c } -> NONE"

### Phase Two:
- Create the following methods to extend implementation:
  - [x] .append(value) which adds a new node with the given value to the end of the list
  - [x] .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
  - [x] .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

### Phase Three:
- k-th value from the end of a linked list.
  - [x] Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
- Approach:
- Big O:

#### Whiteboard Phase One:

#### Whiteboard Phase Two:
![phase two](img/cc_class-6.png)
#### Whiteboard Phase Three:
![phase three](img/cc7.png)
