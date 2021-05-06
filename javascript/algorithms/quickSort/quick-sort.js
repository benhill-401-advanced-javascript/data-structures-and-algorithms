'use strict';

const numbers = [8, 4, 23, 42, 16, 15, 23, 5432, 21, 653];



function quickSort(array, left, right) {
  const length = array.length;

  if (left < right) {
    let pivot = right;
    let partitionIndexes = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndexes - 1);
    quickSort(array, partitionIndexes + 1, right);
  }
  return length;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndexes = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndexes);
      partitionIndexes++;
    }
  }
  swap(array, right, partitionIndexes);
  return partitionIndexes;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
