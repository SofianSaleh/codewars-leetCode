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

console.time('exe time');
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
console.timeEnd('exe time');

// console.log(sequentialDigits(100, 300));
// console.log(sequentialDigits(1000, 13000));
let x = sequentialDigits(10, 1000000000);
console.log(
  x
  //   ===
  //     [
  //       12,
  //       23,
  //       34,
  //       45,
  //       56,
  //       67,
  //       78,
  //       89,
  //       123,
  //       234,
  //       345,
  //       456,
  //       567,
  //       678,
  //       789,
  //       1234,
  //       2345,
  //       3456,
  //       4567,
  //       5678,
  //       6789,
  //       12345,
  //       23456,
  //       34567,
  //       45678,
  //       56789,
  //       123456,
  //       234567,
  //       345678,
  //       456789,
  //       1234567,
  //       2345678,
  //       3456789,
  //       12345678,
  //       23456789,
  //       123456789,
  // ]
);

// ######################## JAVASCRIPT ########################

// ######################## PYTHON ########################

// ######################## PYTHON3 ########################
