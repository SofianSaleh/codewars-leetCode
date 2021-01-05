// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

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
// [1,2,3,3,4,4,5]
let x = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
    )
  )
);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let newList = new ListNode(0);
  newList.next = head;
  let prev = head;
  while (head) {
    while ((head.next && head.val) === head.next.val) {
      head = head.next;
    }
    if (prev.next === head) {
      prev = prev.next;
    } else {
      prev.next = head.next;
    }
  }
};
