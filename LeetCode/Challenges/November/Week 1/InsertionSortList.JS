// Sort a linked list using insertion sort.

// A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

// Algorithm of Insertion Sort:

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

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
var insertionSortList = function (head) {
  let dummy = new ListNode(0);
  let curr = head;

  while (curr) {
    let prev = dummy;
    while (prev.next && prev.next.val < curr.val) {
      prev = prev.next;
    }
    next = curr.next;
    curr.next = prev.next;
  }
};

// class Solution:
//     def insertionSortList(self, head: ListNode) -> ListNode:
//         dummy = ListNode(0)
//         curr = head

//         while curr:
//             prev = dummy
//             while prev.next and prev.next.val < curr.val:
//                 prev = prev.next
//             next = curr.next
//             curr.next = prev.next
//             prev.next = curr
//             curr = next

//         return dummy.next
