// //Compare two version numbers version1 and version2.
// If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

// You may assume that the version strings are non - empty and contain only digits and the.character.

//     The.character does not represent a decimal point and is used to separate number sequences.

// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second - level revision of the second first - level revision.

// You may assume the default revision number for each level of a version number to be 0. For example,
//  version number 3.4 has a revision number of 3 and 4 for its first and second level revision number.
//  Its third and fourth level revision number are both 0.

function compareVersion(version1: string, version2: string): number {
    let res: number = -1

    let v1: string[] = version1.split('.')
    let v2: string[] = version2.split('.')
    let len: number = v1.length > v2.length ? v1.length : v2.length
    console.log(len)
    for (let i = 0; i < len; i++) {
        // console.log(parseInt(v1[i]) > parseInt(v2[i]))
        if (parseInt(v1[i]) > parseInt(v2[i])) return 1
        if (parseInt(v1[i]) < parseInt(v2[i])) return -1
    }

    return res
};

console.log(compareVersion("0.1", "1.1"))
// console.log(compareVersion("1.0.1", "1"))
// console.log(compareVersion("7.5.2.4", "7.5.3"))
// console.log(compareVersion("1.01", "1.001"))
