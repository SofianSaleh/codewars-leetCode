// ######################## TYPESCRIPT ########################

function isRobotBounded(instructions: string): boolean {
    let x: number = 0
    let y: number = 0
    let d: number = 0
    //                              up    down 
    let directions: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    for (const instruction of instructions) {
        if (instruction === 'G') {

        } else if (instruction === 'L') {
            d = (d + 3) % 4

        }

    }
};

// ######################## JAVASCRIPT ########################

/**
 * @param {string} instructions
 * @return {boolean}
 */
// var isRobotBounded = function(instructions) {

// };

// ######################## PYTHON ########################

// class Solution(object):
//     def isRobotBounded(self, instructions):
//         """
//         :type instructions: str
//         :rtype: bool
//         """


// ######################## PYTHON3 ########################

// class Solution:
//     def isRobotBounded(self, instructions: str) -> bool:
