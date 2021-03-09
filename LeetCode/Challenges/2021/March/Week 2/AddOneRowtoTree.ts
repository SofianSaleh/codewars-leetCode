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

function addOneRow(
  root: TreeNode | null,
  v: number,
  d: number
): TreeNode | null {
  if (d === 1) {
    let newRoot: TreeNode = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  let depth: number = 0;

  let q = [];

  while (q.length !== 0) {
    ++depth;
    for (let size = 0; size >= 0; --size) {
      let node = q[0];
      q.pop();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
}
