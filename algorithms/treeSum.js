"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeSum = void 0;
var treeNode_1 = require("../data_structures/treeNode");
var treeSum = function (root) {
    if (!root)
        return 0;
    root.value += (0, exports.treeSum)(root.left);
    root.value += (0, exports.treeSum)(root.right);
    console.log('root value: ', root.value);
    return root.value;
};
exports.treeSum = treeSum;
console.log((0, exports.treeSum)(treeNode_1.numberRoot));
