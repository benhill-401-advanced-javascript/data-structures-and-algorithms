'use strict';
function mergeSort(left, right) {
    var i = 0;
    var j = 0;
    var results = [];
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            results.push(right[j]);
            j++;
        }
        else if (j === right.length || left[i] >= right[j]) {
            results.push(left[i]);
            i++;
        }
        else {
            results.push(right[j]);
            j++;
        }
    }
    return results;
}
console.log(mergeSort([8, 4, 23, 42, 16, 15], [20, 18, 12, 8, 5, -2]));
