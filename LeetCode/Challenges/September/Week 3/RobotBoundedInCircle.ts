// ######################## TYPESCRIPT ########################

function isRobotBounded(instructions: string): boolean {
    let x: any = 0
    let y: any = 0
    let d: number = 0
    //                              up    down 
    let directions: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    for (const instruction of instructions) {
        if (instruction === 'G') {
            x += directions[d][0]
            y += directions[d][1]
        } else if (instruction === 'L') {
            d = (d + 3) % 4

        } else {
            d = (d + 1) % 4
        }

    }
    return (x === 0 && y === 0) || d > 0 ? true : false
};

console.log(isRobotBounded("GG"))
console.log(isRobotBounded("GGLLGGL"))
// ######################## JAVASCRIPT ########################

/**
 * @param {string} instructions
 * @return {boolean}
 */
// var isRobotBounded = function (instructions) {
//     let x = 0
//     let y = 0
//     let d = 0
//     //                              up    down 
//     let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

//     for (const instruction of instructions) {
//         if (instruction === 'G') {
//             x += directions[d][0]
//             y += directions[d][1]
//         } else if (instruction === 'L') {
//             d = (d + 3) % 4

//         } else {
//             d = (d + 1) % 4
//         }

//     }
//     return (x === 0 && y === 0) || d > 0 ? true : false
// };

// ######################## PYTHON ########################

// class Solution(object):
//     def isRobotBounded(self, instructions):
//         """
//         :type instructions: str
//         :rtype: bool
//         """
        // x = 0
        // y = 0
        // d = 0                           
        // directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        // for instruction in instructions:
        //     if instruction == 'G':
        //         x += directions[d][0]
        //         y += directions[d][1]
        //     elif instruction == 'L':
        //         d = (d + 3) % 4

        //     else:
        //         d = (d + 1) % 4
        // return (x,y)== (0, 0) or d > 0



// ######################## PYTHON3 ########################

// class Solution:
//     def isRobotBounded(self, instructions: str) -> bool:
        // x = 0
        // y = 0
        // d = 0                           
        // directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        // for instruction in instructions:
        //     if instruction == 'G':
        //         x += directions[d][0]
        //         y += directions[d][1]
        //     elif instruction == 'L':
        //         d = (d + 3) % 4

        //     else:
        //         d = (d + 1) % 4
        // return (x,y)== (0, 0) or d > 0
