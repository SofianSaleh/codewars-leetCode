// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new (TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15), new TreeNode()(7))
))();

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  var minimum = function (curr) {
    if (curr === null) return 0;
    if (curr.left === null && curr.rigth === null) return 1;
    if (!curr.left) {
      return 1 + minimum(curr.right);
    } else if (!curr.right) {
      return 1 + minimum(curr.left);
    }
    return 1 + Math.min(minimum(curr.left), minimum(curr.right));
  };
  return minimum(root);
};
console.log(minDepth(root));
// ###################### PYTHON ####################### //
// # Definition for a binary tree node.
// # class TreeNode:
// #     def __init__(self, val=0, left=None, right=None):
// #         self.val = val
// #         self.left = left
// #         self.right = right
// class Solution:
//     def minDepth(self, root: TreeNode) -> int:
//         if not root:
//             return 0

//         ans = 0
//         queue = collections.deque([root])

//         while queue:
//             ans += 1
//             for i in range(len(queue)):
//                 node = queue.popleft()
//                 if not node.left and not node.right:
//                     return ans
//                 if node.left:
//                     queue.append(node.left)
//                 if node.right:
//                     queue.append(node.right)
