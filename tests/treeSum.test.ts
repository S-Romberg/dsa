import { treeSum } from '../algorithms/treeSum'
import { TreeNode } from '../data_structures/treeNode'

describe('treeSum', () => {
  test('should return 0 for null root', () => {
    expect(treeSum(null)).toBe(0)
  })

  test('should return value for single node tree', () => {
    const root = new TreeNode(5)
    expect(treeSum(root)).toBe(5)
  })

  test('should sum simple tree with three nodes', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    expect(treeSum(root)).toBe(6)
  })

  test('should handle complex tree', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.right = new TreeNode(6)
    expect(treeSum(root)).toBe(21)
  })

  test('should handle negative numbers', () => {
    const root = new TreeNode(-1)
    root.left = new TreeNode(-2)
    root.right = new TreeNode(3)
    expect(treeSum(root)).toBe(0)
  })
})
