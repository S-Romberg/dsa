"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadthFirst = void 0;
var treeNode_1 = require("../data_structures/treeNode");
// Use queue for breadthFirst
// 
var breadthFirst = function (tree) {
    var _a, _b;
    var values = [];
    var queue = [tree];
    var current;
    while (queue.length) {
        current = queue.pop();
        console.log('current: ', current);
        console.log('queue: ', queue);
        if (current.left)
            queue.unshift(current.left);
        console.log('left: ', (_a = current.left) === null || _a === void 0 ? void 0 : _a.value);
        if (current.right)
            queue.unshift(current.right);
        console.log('right: ', (_b = current.right) === null || _b === void 0 ? void 0 : _b.value);
        values.push(current.value);
    }
    console.log(values);
    return values;
};
exports.breadthFirst = breadthFirst;
(0, exports.breadthFirst)(treeNode_1.root);
