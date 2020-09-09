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

    return res
};