'use strict';
// const node = require('./node.js');
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = {};
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        this.size++;
        this.storage[this.size] = value;
    };
    Stack.prototype.pop = function () {
        var removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size];
    };
    return Stack;
}());
module.exports = Stack;
