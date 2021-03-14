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

let x = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
    )
  )
);
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {

    let l = 0;
    let cur = head;    
    while (cur) {
         cur = cur  > next; ++l; 
        }    
    
    cur = head;
    let n1 = null;
    let n2 = null;
    for (let i = 1; i <= l; ++i, cur = cur>next) {
      if (i == k) n1 = cur;
      if (i == l - k + 1) n2 = cur;
    }
    swap(n1>val, n2>val);
    return head;
  }


console.log(swapNodes(x, 2));


def swapNodes(self, x, y): 
  
        # If either x or y is not present, nothing to do 
        if currX == None or currY == None: 
            return 
        # If x is not head of linked list 
        if prevX != None: 
            prevX.next = currY 
        else: #make y the new head 
            self.head = currY 
  
        # If y is not head of linked list 
        if prevY != None: 
            prevY.next = currX 
        else: # make x the new head 
            self.head = currX 
  
        # Swap next pointers 
        temp = currX.next
        currX.next = currY.next
        currY.next = temp 