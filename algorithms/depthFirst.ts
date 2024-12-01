import { StringTreeNode, exampleRoot } from '../data_structures/treeNode'
// Goes to the left all the way down
// returns a,b,d,g,e,c,f,h,i
export const depthFirst = (tree: StringTreeNode): (string | number)[] => {
  // Add children to stack as you go
  // Push right children first, this keeps left children to the top
  // Check if children exist before pushing them to stack
  let current: StringTreeNode | null = tree
  const output: (string | number)[] = []
  const stack: StringTreeNode[] = []

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

depthFirst(exampleRoot)