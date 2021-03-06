// Given the coordinates of four points in 2D space, return whether the four points could construct a square.

// The coordinate (x,y) of a point is represented by an integer array with two integers.

// Example:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True

// Note:

// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  var dist = function (p1, p2) {
    return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
  };
  let distSet = new Set();
  let points = [p1, p2, p3, p4];

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      distSet.add(dist(points[i], points[j]));
    }
  }
  return !distSet.has(0) && distSet.size === 2;
};

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));

// distSet = set()
//         points = [p1, p2, p3, p4]

//         for i in range(4):
//             for j in range(i + 1, 4):
//                 distSet.add(dist(points[i], points[j]))

//         return 0 not in distSet and len(distSet) == 2
