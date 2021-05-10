# Linked List

- [Click here](../../node-class/README.md) to view my Node class. 
- [Click here](LinkedList.js) for the linked list and [here](index.js) for verification.


## Summary
A linked list is a _linear data structure_ where elements are not stored at contiguous locations like an array. Instead the elements use _pointers_ that link each node together.
- Linked lists store data in nodes, describing the value it holds and the value of the next, or previous, node it's linked to.


## Implementation

Constructor for Linked List class will store a default value of `null`. The following methods will build out the data structure:
### `addToHead()`
- Includes a new head storing a new instance of Node and passing in value. 
- Current head points to the head of the linked list, defaulting to `null`.
  - New nodes will add to the list at the head.
- As long as the current head's value is not `null`, point the current head to set the next node.

### `addToTail()`
- Adds a new node to the end of the list starting at the `tail` node.
- If the tail reads `null`, create a new instance of Node's value so `addToTail()` can add a node at the end of list.
- Otherwise if tail does not read `null`, tail will keep getting the value of the next node.
  - Until it stops being true that the next node has value and reads `null`, tail will set the next node as a new instance of Node

### `removeHead()`
- Looks at the head node to check for value.
- Checks that the next node is `null` and changes the value of the head to `null`, thereby removing the current head.

### `printList()`
- Looks at the head and tail's value and returns the result in a string.

