//  Definition for a binary tree node.
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

let x = new TreeNode();
x.val = 1;
x.left = new TreeNode(0);
x.right = new TreeNode(1);
x.right.right = new TreeNode(1);
x.right.left = new TreeNode(0);
x.left.left = new TreeNode(0);
x.left.right = new TreeNode(1);

// console.log(x.left);

function sumRootToLeaf(root: TreeNode | null): number {
  let result: number = 0;
  let currentSum: number = 0;

  if (!root) return 0;
  function recursive(tree: TreeNode, currentSum: number) {
    if (!tree) {
      return;
    }

    currentSum = currentSum * 2 + tree.val;
    if (tree.left === null || tree.right === null) {
      result += currentSum;
    }
    recursive(tree.left, currentSum);
    recursive(tree.right, currentSum);
  }
  recursive(root, currentSum);
  return result;
}
console.log(sumRootToLeaf(x));
