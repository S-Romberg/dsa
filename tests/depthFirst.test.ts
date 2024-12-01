import { depthFirst } from '../algorithms/depthFirst'
import { StringTreeNode } from '../data_structures/treeNode'

describe('depthFirst', () => {
  test('should traverse a simple tree', () => {
    const tree = new StringTreeNode(1);
    tree.left = new StringTreeNode(2);
    tree.right = new StringTreeNode(3);
    /*
         1
        / \
       2   3
    */
    expect(depthFirst(tree)).toEqual([1, 2, 3]);
  })

  test('should handle deeper left-side nodes', () => {
    const tree = new StringTreeNode(1);
    tree.left = new StringTreeNode(2);
    tree.left.left = new StringTreeNode(3);
    tree.right = new StringTreeNode(4);
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
    const tree = new StringTreeNode(1);
    tree.right = new StringTreeNode(2);
    tree.right.right = new StringTreeNode(3);
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
    const tree = new StringTreeNode(1);
    tree.left = new StringTreeNode(2);
    tree.right = new StringTreeNode(3);
    tree.left.left = new StringTreeNode(4);
    tree.left.right = new StringTreeNode(5);
    tree.right.left = new StringTreeNode(6);
    /*
          
    */
    expect(depthFirst(tree)).toEqual([1, 2, 4, 5, 3, 6]);
  })
})
