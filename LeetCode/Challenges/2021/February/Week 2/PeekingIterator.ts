/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

// class Iterator {
//   hasNext(): boolean {}

//   next(): number {}
// }

class PeekingIterator {
  constructor(iterator: Iterator) {
    this.iterator = iterator;
    if (iterator.hasNext()) {
      let next = iterator.next();
    }
  }

  peek(): number {
    return next;
  }

  next(): number {}

  hasNext(): boolean {}
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
