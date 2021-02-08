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
// var PeekingIterator = function (iterator) {
//   let it = iterator;
//   let next;
//   if (it.hasNext()) {
//     next = it.next();
//   }
// };

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  let next = this.next;
  this.next = this.iterator.hasNext() ? this.iterator.next() : null;
  return next;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.next != null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
