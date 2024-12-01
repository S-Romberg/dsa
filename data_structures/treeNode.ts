export class StringTreeNode {
  constructor(
    public value: string | number, 
    public left?: StringTreeNode, 
    public right?: StringTreeNode
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class TreeNode {
  constructor(
    public value: number, 
    public left?: TreeNode, 
    public right?: TreeNode
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


export const exampleRoot = new StringTreeNode('a')
const b = new StringTreeNode('b')
const c = new StringTreeNode('c')
const d = new StringTreeNode('d')
const e = new StringTreeNode('e')
const f = new StringTreeNode('f')
const g = new StringTreeNode('g')
const h = new StringTreeNode('h')
const i = new StringTreeNode('i')
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f
// /       / \
//g       h   i
exampleRoot.left = b
exampleRoot.right = c
b.left = d
b.right = e
d.left = g
c.right = f
f.left = h
f.right = i


export const numberRoot = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const node8 = new TreeNode(8)
const node9 = new TreeNode(9)
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
// /       / \
//7       8   9
numberRoot.left = node2
numberRoot.right = node3
node2.left = node4
node2.right = node5
node4.left = node7
node3.right = node6
node6.left = node8
node6.right = node9