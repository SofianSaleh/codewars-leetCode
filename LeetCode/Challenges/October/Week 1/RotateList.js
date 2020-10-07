// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

var rotateRight = function (head, k) {
  // Check the given parameters
  if (!head || !head.next || k === 0) return head;

  let len = 0;
  let current = head;
  while (current) {
    len += 1;
    current = current.next;
  }

  k %= len;
  if (k === 0) return head;

  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  // make the slow start from where we want to shift
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  let ans = slow.next;
  slow.next = null;
  fast.next = head;
  return ans;
};
console.log(rotateRight(list, 2));
