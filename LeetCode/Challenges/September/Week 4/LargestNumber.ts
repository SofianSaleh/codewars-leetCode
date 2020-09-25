// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, so you need to return a string instead of an integer.

function largestNumber(nums: number[]): string {
  var res = nums
    .sort(function (a, b) {
      var str1 = '' + a + b;
      var str2 = '' + b + a;
      if (str1 === str2) return 0;
      return str1 > str2 ? -1 : 1;
    })
    .join('');
  return res[0] === '0' ? '0' : res;
}

console.log(largestNumber([1, 2, 3, 3]));
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));
