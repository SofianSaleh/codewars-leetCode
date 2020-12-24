// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes. Only nodes itself may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let len = 0;
  let curr = head;

  while (curr) {
    len += 1;
    curr = curr.next;
  }
  let prev = dummy;
  curr = head;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let nxt = curr.next;
    curr.next = nxt.next;
    nxt.next = prev.next;
    prev.next = nxt;
    curr = curr.next;
  }
  return dummy.next;
};
