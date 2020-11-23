// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:

// Input: [3,2,3,null,3,null,1]

//      3
//     / \
//    2   3
//     \   \
//      3   1

// Output: 7
// Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:

// Input: [3,4,5,1,3,null,1]

//      3
//     / \
//    4   5
//   / \   \
//  1   3   1

// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const robR = (root) => {
  if (!root) {
    return 0;
  }

  let val = 0;

  if (root.left) {
    val += robR(root.left.left) + robR(root.left.right);
  }

  if (root.right) {
    val += robR(root.right.left) + robR(root.right.right);
  }

  return Math.max(val + root.val, robR(root.left) + robR(root.right));
};

/**
 * Step III - Greedy
 */
const rob = (root) => {
  const res = robSub(root);
  return Math.max(res[0], res[1]);
};

const robSub = (root) => {
  if (root == null) {
    return [0, 0];
  }

  const left = robSub(root.left);
  const right = robSub(root.right);
  const res = [0, 0];

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];

  return res;
};

// class Solution:
//     def rob(self, root: TreeNode) -> int:
//         def robOrNot(root: TreeNode) -> tuple:
//             if not root:
//                 return (0, 0)

//             robLeft, notRobLeft = robOrNot(root.left)
//             robRight, notRobRight = robOrNot(root.right)

//             return (root.val + notRobLeft + notRobRight,
//                     max(robLeft, notRobLeft) + max(robRight, notRobRight))

//         return max(robOrNot(root))
