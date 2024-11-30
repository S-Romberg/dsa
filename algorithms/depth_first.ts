export class TreeNode {
  constructor(
    public value: string | number, 
    public left?: TreeNode, 
    public right?: TreeNode
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode('a')
const b = new TreeNode('b')
const c = new TreeNode('c')
const d = new TreeNode('d')
const e = new TreeNode('e')
const f = new TreeNode('f')
const g = new TreeNode('g')
const h = new TreeNode('h')
const i = new TreeNode('i')
//      a
//     / \
//    b   c
//   / \   \
//  d   e   f
// /       / \
//g       h   i
root.left = b
root.right = c
b.left = d
b.right = e
d.left = g
c.right = f
f.left = h
f.right = i


// Goes to the left all the way down
// returns a,b,d,g,e,c,f,h,i
export const depthFirst = (tree: TreeNode): (string | number)[] => {
  // Add children to stack as you go
  // Push right children first, this keep left children to the top
  // Check if children exist before pushing them to stack
  let current: TreeNode | null = tree
  const output: (string | number)[] = []
  const stack: TreeNode[] = []

  while (current) { 
    output.push(current.value)
    if(current.right) stack.push(current.right) 
    if(current.left) stack.push(current.left)

    if (stack.length) {
      const node = stack.pop();
      if (node) current = node;
    } else {
      current = null;
    } 
  }

  return output;
}


depthFirst(root)

