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

    if (x == y)
        return 
};

console.log(swapNodes(x, 2));


def swapNodes(self, x, y): 
  
  
        # Search for x (keep track of prevX and CurrX) 
        prevX = None
        currX = self.head 
        while currX != None and currX.data != x: 
            prevX = currX 
            currX = currX.next
  
        # Search for y (keep track of prevY and currY) 
        prevY = None
        currY = self.head 
        while currY != None and currY.data != y: 
            prevY = currY 
            currY = currY.next
  
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