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
