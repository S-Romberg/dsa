import { TreeNode } from "../data_structures/treeNode"

// Depth First
// Recursive is generally depth first for trees
export const treeIncludes = (root: TreeNode, val: number): boolean => {
  if(!root) return false
  
  if (root.value === val) {
    return true;
  }

  return treeIncludes(root.left, val) || treeIncludes(root.right, val)
}

// Breadth First


