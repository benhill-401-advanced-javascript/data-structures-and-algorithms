# Merge Sort

To view my code implementation, [click here](./merge_sort.py)
To view tests, [click here](../tests/test_merge_sort.py)

Merge sort is a recursive algorithm that continually splits a list in half.
- If the list is empty or has one item, it is sorted by definition (base case).
- If the list has more than one item, split the list and recursively invoke a merge sort on both on both halves. 
- Once the two halves are sorted, the algorithm's namesake happens, and are _merged_ back together in order. 
  - Merging is the process of taking two smaller sorted lists and combining them together into a single, sorted, new list.

Pseudo code looks like this:
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
