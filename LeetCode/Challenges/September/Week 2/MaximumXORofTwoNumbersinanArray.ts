// Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

// Could you do this in O(n) runtime?

// Example:

// Input: [3, 10, 5, 25, 2, 8]

// Output: 28

// Explanation: The maximum result is 5 ^ 25 = 28.

// XOR:
/**
 * Num  Ans
 * 0 0   0
 * 1 0   1
 * 0 1   1 
 * 1 1   0
 */


// ######################## TYPESCRIPT ########################

function findMaximumXOR(nums: number[]): number {
    let binaryArr = []

    for (let i = 0; i < nums.length; i++) {
        binaryArr.push(convertDecimalToBinary(nums[i]))
    }
    console.log(binaryArr)
    for (let i = 30; i >= 0; i--) {


    }
    return 0
};
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))

function convertDecimalToBinary(number: number) {
    var binary = "";
    var temp = number;

    while (temp > 0) {
        if (temp % 2 == 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }

    return binary;
}

// ######################## JAVASCRIPT ########################



// ######################## PYTHON ########################



// ######################## PYTHON3 ########################



