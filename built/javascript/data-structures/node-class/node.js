/** A module for Node class
 * @module Node
*/
/** Creates a new Node class
 * @class
 * @lends
 * */
var Node = /** @class */ (function () {
    /** Initializes Node values default to `null`
     * @constructs
     * @param {Object} value
     */
    function Node(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    /** Sets next node if instance of Node or Node is `null`
     * @param {node} node
     */
    Node.prototype.setNextNode = function (node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        }
        else {
            throw new Error('Next node must be a member of the Node class');
        }
    };
    /** Sets previous node if instance of Node or Node is `null`
     * @param {node} node
     */
    Node.prototype.setPreviousNode = function (node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        }
        else {
            throw new Error('Previous node must be a member of the Node class');
        }
    };
    /** Returns the value of next node
     * @returns {value} next value
     */
    Node.prototype.getNextNode = function () {
        return this.next;
    };
    /** Returns the value of previous node
     * @returns {value} previous value
     */
    Node.prototype.getPreviousNode = function () {
        return this.previous;
    };
    return Node;
}());
// const newNode = new Node('I am an instance of a Node!');
// const secondNode = new Node('I am the next node!');
// const thirdNode = new Node('I am a node and I only know about myself!');
// newNode.setNextNode(secondNode);
// secondNode.setNextNode(thirdNode);
// thirdNode.getPreviousNode(secondNode);
// console.log(newNode);
module.exports = Node;
