import { StringTreeNode, exampleRoot } from '../data_structures/treeNode'

// Use queue for breadthFirst
export const breadthFirst = (tree: StringTreeNode): (number | string)[] => {
  if (!tree) { return [] }

  const values: (string | number)[] = [ ]
  const queue: StringTreeNode[] = [tree]
  let current: StringTreeNode;

  while (queue.length) {
    current = queue.pop()
    if(current.left) queue.unshift(current.left)
    if(current.right) queue.unshift(current.right)
    
    values.push(current.value)
  }
  console.log(values)
  return values;
}

console.log(breadthFirst(exampleRoot));