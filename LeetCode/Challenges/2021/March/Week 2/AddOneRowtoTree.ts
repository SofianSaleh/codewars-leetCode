/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var addOneRow = function (root: TreeNode, v: number, d: number) {
  if (d === 1) return new TreeNode(v, root, null);
  if (d === 2) {
    root.left = new TreeNode(v, root.left, null);
    root.right = new TreeNode(v, null, root.right);
  } else {
    if (root.left) addOneRow(root.left, v, d - 1);
    if (root.right) addOneRow(root.right, v, d - 1);
  }
  return root;
};
