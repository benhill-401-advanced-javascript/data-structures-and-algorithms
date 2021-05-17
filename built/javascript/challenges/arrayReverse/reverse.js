'use strict';
var reverse = function (list) {
    var start = 0;
    var end = list.length - 1;
    while (start <= end) {
        var temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
};
module.exports = reverse;
