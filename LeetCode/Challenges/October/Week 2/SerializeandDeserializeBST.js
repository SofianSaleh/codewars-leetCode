// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Example 1:

// Input: root = [2,1,3]
// Output: [2,1,3]
// Example 2:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  var result = [];
  serializer(root, result);

  return result.join(',');
};

var serializer = function (node, output) {
  if (!node) {
    output.push('#');
    return;
  }
  output.push(node.val);
  serializer(node.left, output);
  serializer(node.right, output);
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(',');
  var index = 0;
  function deserializer(data) {
    if (index > data.length || data[index] === '#') {
      return null;
    }

    var node = new TreeNode(parseInt(data[index]));
    index++;
    //    node.left = deserializer(data,index);
    //    index++;
    //    node.right = deserializer(data, index);
    //    return node;
  }

  return deserializer(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
