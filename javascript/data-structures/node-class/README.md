# Node methods

These methods will be your 'global' node methods to import into your other data structures. 

### Set next node
When a node is created, the `next` node is initially set to `null`, without a formal way to change it. The `setNextNode` method allows the `next` node to be updated so it can be traversed and used in more complex data structures. For this, `setNextNode` will be a _setter_ to modify the `this.next` node property.
- In order to ensure that the next node is in fact a node rather than any arbitrary argument,`setNextNode` does a check that only allows arguments if they are an `instanceof` nodes or `null`. `null` will be allowed in case I want to break a link between a node and its next node.

### Get next node
Use the `getNextNode` method in order to return the next value by itself rather than printing the entire list. This is a _getter_ method.  


