var wordPattern = function (pattern: string, str: string): boolean {
    let patternObj = {}
    let splittedArr: string[] = str.split(' ')

    for (let i: number = 0; i < pattern.length; i++) {
        if (!patternObj[pattern[i]]) {
            patternObj[pattern[i]] = splittedArr[i]
        } else {
            if (patternObj[pattern[i]] !== splittedArr[i]) {
                return false
            }
        }
    }
    return true
};

console.log(wordPattern("abba", "dog cat cat dog"))