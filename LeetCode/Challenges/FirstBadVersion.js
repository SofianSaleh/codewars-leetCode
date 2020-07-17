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
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let middle = Math.round(n / 2)
        if (isBadVersion(middle)) {
            middle - 1
            for (i = middle; i >= 0; i--) {
                if (isBadVersion(i)) {
                    return i
                }
            }
        } else {
            middle += 1
            for (i = middle; i < n; i++) {
                if (isBadVersion(i)) {
                    return i
                }
            }

        }


    };
};;