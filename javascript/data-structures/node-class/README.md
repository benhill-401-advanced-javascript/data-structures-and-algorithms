# Node methods

## Summary
A [node](https://en.wikipedia.org/wiki/Node_(computer_science)) is a basic unit of a data structure, such as a linked list or tree. 
- Nodes contain data and also may link to other nodes.
- The values stored in a node refers to itself, and the value to the next node.
- Links between nodes are often implemented using pointers.

## Methods
These methods will be used to import into your other data structures. 
### `setNextNode()`
When a node is created, the `next` node is initially set to `null`, without a formal way to change it. The `setNextNode` method allows the `next` node to be updated so it can be traversed and used in more complex data structures. For this, `setNextNode` will be a _setter_ to modify the `this.next` node property.
- In order to ensure that the next node is in fact a node rather than any arbitrary argument,`setNextNode` does a check that only allows arguments if they are an `instanceof` nodes or `null`. `null` will be allowed in case I want to break a link between a node and its next node.

### `getNextNode()`
Use the `getNextNode` method in order to return the next value by itself rather than printing the entire list. This is a _getter_ method.  


