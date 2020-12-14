'use strict';

function mergeSort(left, right) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < left.length || j < right.length) {
    if (i === left.length) {
      results.push(right[j]);
      j++;
    } else if (j === right.length || left[i] >= right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  return results;
}

console.log(mergeSort([8, 4, 23, 42, 16, 15], [20, 18, 12, 8, 5, -2]));
