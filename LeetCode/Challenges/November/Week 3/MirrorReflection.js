// There is a special square room with mirrors on each of the four walls.
// Except for the southwest corner,
// there are receptors on each of the remaining corners, numbered 0, 1, and 2.

// The square room has walls of length p, and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.

// Return the number of the receptor that the ray meets first.  (It is guaranteed that the ray will meet a receptor eventually.)

// Example 1:

// Input: p = 2, q = 1
// Output: 2
// Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.

// Note:

// 1 <= p <= 1000
// 0 <= q <= p

/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  let m = 1;
  let n = 1;

  while (m * p !== n * p) {
    n += 1;
    m = Math.floor((n * q) / p);
    if (m % 2 == 0 && n % 2 == 1) return 0;
    if (m % 2 == 1 && n % 2 == 1) return 1;
    if (m % 2 == 1 && n % 2 == 0) return 2;
  }
};

// class Solution:
//     def mirrorReflection(self, p: int, q: int) -> int:
//         m = 1
//         n = 1
