# Merge Sort

To view my code implementation, [click here](./merge_sort.py)
To view tests, [click here](../tests/test_merge_sort.py)

Merge sort is a recursive algorithm that continually splits a list in half.
- If the list is empty or has one item, it is sorted by definition (base case).
- If the list has more than one item, split the list and recursively invoke a merge sort on both on both halves. 
- Once the two halves are sorted, the algorithm's namesake happens, and are _merged_ back together in order. 
  - Merging is the process of taking two smaller sorted lists and combining them together into a single, sorted, new list.

