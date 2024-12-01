import { TreeNode, numberRoot } from "../data_structures/treeNode";

export const treeSum = (root: TreeNode): number => {
  if (!root) return 0

  root.value += treeSum(root.left)
  root.value += treeSum(root.right)

  console.log('root value: ', root.value)
  return root.value
}

console.log(treeSum(numberRoot))