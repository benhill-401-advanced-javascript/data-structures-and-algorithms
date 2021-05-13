'use strict';
var numbers = [8, 4, 23, 42, 16, 15, 23, 5432, 21, 653];
function quickSort(array, left, right) {
    var length = array.length;
    if (left < right) {
        var pivot = right;
        var partitionIndexes = partition(array, pivot, left, right);
        quickSort(array, left, partitionIndexes - 1);
        quickSort(array, partitionIndexes + 1, right);
    }
    return length;
}
function partition(array, pivot, left, right) {
    var pivotValue = array[pivot];
    var partitionIndexes = left;
    for (var i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndexes);
            partitionIndexes++;
        }
    }
    swap(array, right, partitionIndexes);
    return partitionIndexes;
}
function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
