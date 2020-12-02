/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    this.head = head;
  }
  /**
   * Returns a random node's value.
   * @return {number}
   */
  getRandom() {}
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
