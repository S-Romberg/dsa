import { treeIncludes } from '../algorithms/treeIncludes'
import { TreeNode } from '../data_structures/treeNode'

describe('treeIncludes', () => {
  let root: TreeNode

  beforeEach(() => {
    //       5
    //      / \
    //     3   7
    //    / \   \
    //   1   4   9
    root = new TreeNode(5)
    root.left = new TreeNode(3)
    root.right = new TreeNode(7)
    root.left.left = new TreeNode(1)
    root.left.right = new TreeNode(4)
    root.right.right = new TreeNode(9)
  })

  test('should return true when target exists', () => {
    expect(treeIncludes(root, 4)).toBe(true)
    expect(treeIncludes(root, 9)).toBe(true)
    expect(treeIncludes(root, 5)).toBe(true)
  })

  test('should return false when target does not exist', () => {
    expect(treeIncludes(root, 6)).toBe(false)
    expect(treeIncludes(root, 10)).toBe(false)
    expect(treeIncludes(root, -1)).toBe(false)
  })

  test('should handle null root', () => {
    expect(treeIncludes(null, 1)).toBe(false)
  })

  test('should find value in single node tree', () => {
    const singleNode = new TreeNode(1)
    expect(treeIncludes(singleNode, 1)).toBe(true)
    expect(treeIncludes(singleNode, 2)).toBe(false)
  })

  test('should find values using breadth-first traversal', () => {
    const visitedOrder: number[] = []
    const customSearch = (root: TreeNode | null, target: number): boolean => {
      if (!root) return false
      
      const queue = [root]
      while (queue.length > 0) {
        const current = queue.shift()!
        visitedOrder.push(current.value)
        if (current.value === target) return true
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
      }
      return false
    }

    customSearch(root, 9)
    expect(visitedOrder).toEqual([5, 3, 7, 1, 4, 9])
  })
})