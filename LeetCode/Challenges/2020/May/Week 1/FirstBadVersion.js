/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let isBadVersion = (num) => {
    if (num >= 1240808008) return true
    else return false
}
// var solution = function () {
/**
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 */
const solution = function (n) {
    let bool = true
    let truthy = n
    let falsey = 0
    let middle = Math.round(n / 2)

    while (bool) {
        console.log(middle)

        if (!isBadVersion(middle)) {
            if (isBadVersion(middle + 1)) return middle + 1
            falsey = middle
            middle = Math.round((falsey + truthy) / 2)

        } else {
            if (!isBadVersion(middle - 1)) return middle
            truthy = middle
            middle = Math.round((truthy + falsey) / 2)
        }
    }

};
// };;

console.log(solution(1792997410))