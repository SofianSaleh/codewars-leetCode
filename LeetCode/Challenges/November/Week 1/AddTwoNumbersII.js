// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

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
let one = new ListNode(
  7,
  new ListNode(2, new ListNode(4, new ListNode(3, null)))
);
let two = new ListNode(5, new ListNode(6, new ListNode(4, null)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1) {
    stack1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2);
    l2 = l2.next;
  }
  let head = null;
  let carry = 0;

  while (carry || stack1 || stack2) {
    if (stack1) {
      carry += stack1.pop();
    }
    if (stack2) {
      carry += stack2.pop();
    }
    let node = new ListNode(carry % 10, null);
    node.next = head;
    head = node;
    carry = Math.floor(carry / 10);
    console.log(carry);
  }
  return head;
};

console.log(addTwoNumbers(one, two));
