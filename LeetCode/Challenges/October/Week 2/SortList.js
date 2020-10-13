// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let x = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
let y = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
);
// Input: head = [-1,5,3,4,0]

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  var split = function (head, k) {
    while (k > 1 && head) {
      head = head.next;
      k -= 1;
    }
    let rest = head ? head.next : null;
    if (head) {
      head.next = null;
    }
    return rest;
  };

  var merge = function (L1, L2) {
    let dummy = ListNode(0);
    let tail = dummy;

    while (L1 && L2) {
      if (l1.val > l2.val) l1, (l2 = l2), l1;
    }
    tail.next = l1;
    l1 = l1.next;
    tail = tail.next;
    tail.next = L1 ? l1 : l2;
    while (tail.next) {
      tail = tail.next;
    }
    return dummy.next, tail;
  };

  let length = 0;
  let curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }

  let dummy = ListNode(0);
  dummy.next = head;

  let k = 1;
  while (k < length) {
    curr = dummy.next;
    tail = dummy;
    while (curr) {
      let l = curr;
      let r = split(l, k);
      curr = split(r, k);
      mergedHead, (mergedTail = merge(l, r));
      tail.next = mergedHead;
      tail = mergedTail;
    }
    k *= 2;
  }

  return dummy.next;
};

console.log(sortList(x));
// console.log(sortList(y));
