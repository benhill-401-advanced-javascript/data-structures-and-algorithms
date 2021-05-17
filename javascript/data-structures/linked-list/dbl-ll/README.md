# Doubly Linked List

Like my [singly linked list](../more-ll/README.md), this doubly linked list will import a [node class](node.js) with the same methods as the singly linked list. The only difference being the Node will have a previous value and methods to set and get previous nodes.

For now, I want this linked list to:
- add a new node to the head of the list
- add a new node to the end of the list
- remove a node from the head and tail
- find and remove a specific node by value


In addition to removing the head and tail of the list, it would also be useful to remove a specific element that could be anywhere in the list
- Imagine you have a list of errands to run
  - You don't always do your errands in order, so when you finish doing your laundry, that could be somehwere in the middle of the list.
  - Build a `removeByValue()` method that will allow you to cross off (remove) that errand no matter where it is in the list.
  - To do this:
    - _Iterate_ through the list to find find the matching node
    - _If there is no_ matching element in the list:
      - _Return `null`_
    - _If there is_ a matching node, then check to see if it is the head _or_ tail of the list:
      - If _head_, _call_ `removeHead()`
      - If _tail_, _call_ `removeTail()`
    - _If not_, that means the  node was somehwere in the middle of the list. In that case:
      - Remove it by resetting the _pointers_ of its previous and next nodes
    - Finally, _return the node_


- print out the list in order from head to tail
