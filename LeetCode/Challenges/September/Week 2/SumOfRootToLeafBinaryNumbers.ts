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
  let arr: number[] = [];
  let subArr: number[] = [];

  if (!root) return 0;
  function recursive(tree: TreeNode, currentSum: number) {
    if (!tree) {
      return;
    }

    currentSum = currentSum * 2 + root.val;
    recursive(tree.left);
    recursive(tree.right);
  }
  let y = recursive(root);
  console.log(y, subArr);

  return 0;
}
console.log(sumRootToLeaf(x));
