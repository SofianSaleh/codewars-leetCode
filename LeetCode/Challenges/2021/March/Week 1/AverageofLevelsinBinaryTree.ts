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

function averageOfLevels(root: TreeNode | null): number[] {
  if (root === null) return;

  let queue = [];
  let averages = [];

  queue.push(root);
  let nodes_count_per_levels = 0;
  let sum_per_level = 0;

  queue.push(null);

  while (queue.length > 0) {
    let node = queue.pop();

    if (node === null) {
      averages.push(sum_per_level / nodes_count_per_levels);
      sum_per_level = 0;
      nodes_count_per_levels = 0;
      queue.push(null);
      if (queue[0] === null) {
        break;
      } else {
        continue;
      }
    }
    sum_per_level += node.val;
    nodes_count_per_levels += 1;
if (node.left !== null)
            queue.push(node.left)

       
        if (node.right !== null):
            queue.push(node.right)
            
        }
        return averages  

}
