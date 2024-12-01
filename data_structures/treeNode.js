"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRoot = exports.exampleRoot = exports.TreeNode = exports.StringTreeNode = void 0;
var StringTreeNode = /** @class */ (function () {
    function StringTreeNode(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return StringTreeNode;
}());
exports.StringTreeNode = StringTreeNode;
var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
exports.exampleRoot = new StringTreeNode('a');
var b = new StringTreeNode('b');
var c = new StringTreeNode('c');
var d = new StringTreeNode('d');
var e = new StringTreeNode('e');
var f = new StringTreeNode('f');
var g = new StringTreeNode('g');
var h = new StringTreeNode('h');
var i = new StringTreeNode('i');
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f
// /       / \
//g       h   i
exports.exampleRoot.left = b;
exports.exampleRoot.right = c;
b.left = d;
b.right = e;
d.left = g;
c.right = f;
f.left = h;
f.right = i;
exports.numberRoot = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
var node7 = new TreeNode(7);
var node8 = new TreeNode(8);
var node9 = new TreeNode(9);
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
// /       / \
//7       8   9
exports.numberRoot.left = node2;
exports.numberRoot.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node7;
node3.right = node6;
node6.left = node8;
node6.right = node9;
