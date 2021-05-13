'use strict';
// function insertionSort(array) {
//   const arr = array.slice();
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       } else {
//         break;
//       }
//     }
//   }
//   return arr;
// }
function insertionSort(int) {
    var arr = int.slice();
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1;
        var temp = arr[i];
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
console.log(insertionSort([8, 4, 23, 42, 16, 15]));
console.log(insertionSort([20, 18, 12, 8, 5, -2]));
console.log(insertionSort([2, 3, 5, 7, 13, 11]));
