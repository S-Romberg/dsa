import { depthFirst } from '../algorithms/depthFirst'
import { TreeNode } from '../data_structures/treeNode'

describe('depthFirst', () => {
  test('should traverse a simple tree', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    /*
         1
        / \
       2   3
    */
    expect(depthFirst(tree)).toEqual([1, 2, 3]);
  })

  test('should handle deeper left-side nodes', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.left.left = new TreeNode(3);
    tree.right = new TreeNode(4);
    /*
         1
        / \
       2   4
      /
     3
    */
    expect(depthFirst(tree)).toEqual([1, 2, 3, 4]);
  })

  test('should handle deeper right-side nodes', () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);
    tree.right.right = new TreeNode(3);
    /*
       1
        \
         2
          \
           3
    */
    expect(depthFirst(tree)).toEqual([1, 2, 3]);
  })

  test('should handle empty tree', () => {
    expect(depthFirst(null)).toEqual([]);
  })

  test('should handle complex tree', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);
    tree.right.left = new TreeNode(6);
    /*
          
    */
    expect(depthFirst(tree)).toEqual([1, 2, 4, 5, 3, 6]);
  })
})
