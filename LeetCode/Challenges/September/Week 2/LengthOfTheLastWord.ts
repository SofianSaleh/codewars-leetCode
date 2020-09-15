
// ######################## TYPESCRIPT ########################
function lengthOfLastWord(s: string): number {
    // let str: string[] = s.split(' ')
    let ans: number = 0
    let i: number = s.length - 1
    while (i >= 0 && s[i] === ' ') {
        i -= 1
    }
    while (i >= 0 && s[i] !== ' ') {
        i -= 1
        ans += 1
    }
    return ans

}
console.log(lengthOfLastWord('a '))

// ######################## JAVASCRIPT ########################
// var lengthOfLastWord = function (s) {
//     let str = s.split(' ')
//     let i = str.length - 1
//     console.log(str)
//     while (i >= 0) {
//         if (str[i] !== '') {
//             return str[i].length
//         } else {
//             i -= 1
//         }
//     }
//     return str[str.length - 1].length

// };
// ######################## PYTHON ########################

// class Solution:
//     def lengthOfLastWord(self, s: str) -> int:
//         ans = 0
//         i = len(s) - 1
//     while i >= 0 and s[i] == ' '): 
//         i -= 1
//     while i >= 0 and s[i] !== ' ':
//         i -= 1
//         ans += 1
//     return ans

// ######################## PYTHON3 ########################

// class Solution:
//     def lengthOfLastWord(self, s: str) -> int:
//         ans = 0
//         i = len(s) - 1
//     while i >= 0 and s[i] == ' '): 
//         i -= 1
//     while i >= 0 and s[i] !== ' ':
//         i -= 1
//         ans += 1
//     return ans

