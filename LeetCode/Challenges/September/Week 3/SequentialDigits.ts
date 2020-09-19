// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

// Constraints:

// 10 <= low <= high <= 10^9

// ######################## TYPESCRIPT ########################

function sequentialDigits(low: number, high: number): number[] {
  let result: number[] = [];

  for (let i = 1; i <= 8; i++) {
    let next: number = 0;

    for (let j = i; j < 10; j++) {
      next = next * 10 + j;
      if (next >= low && next < high) {
        result.push(next);
      } else if (next > high) break;
    }
  }
  result = result.sort((a, b) => a - b);
  return result;
}

// console.log(sequentialDigits(100, 300));
// console.log(sequentialDigits(1000, 13000));
// ######################## JAVASCRIPT ########################

// /**
//  * @param {number} low
//  * @param {number} high
//  * @return {number[]}
//  */
// var sequentialDigits = function(low, high) {
//     let result= [];

//     for (let i = 1; i <= 8; i++) {
//       let next = 0;

//       for (let j = i; j < 10; j++) {
//         next = next * 10 + j;
//         if (next >= low && next < high) {
//           result.push(next);
//         } else if (next > high) break;
//       }
//     }
//     result = result.sort((a, b) => a - b);
//     return result;
// };

// ######################## PYTHON ########################

// ######################## PYTHON3 ########################

// class Solution:
//     def sequentialDigits(self, low: int, high: int) -> List[int]:
//         result = []

//         for x in range(1, 9):
//             next = 0
//             for y in range(x, 10):
//                 next = next * 10 + y

//                 if next >= low and next < high:
//                     result.append(next)
//                 elif next > high:
//                     break

//         return sorted(result)
