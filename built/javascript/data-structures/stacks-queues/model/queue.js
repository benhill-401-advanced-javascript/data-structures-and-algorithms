'use strict';
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    Queue.prototype.enqueue = function (value) {
        this.storage[this.tail] = value;
        this.tail++;
    };
    Queue.prototype.dequeue = function () {
        var removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue('stuff');
queue.enqueue('more stuff');
queue.enqueue('and more stuff');
queue.enqueue('more more stuff');
console.log(queue);
queue.dequeue();
queue.dequeue();
// queue.dequeue();
console.log(queue);
module.export = Queue;
