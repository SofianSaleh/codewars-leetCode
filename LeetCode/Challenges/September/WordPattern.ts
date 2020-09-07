var wordPattern = function (pattern: string, str: string): boolean {
    let patternObj = {}
    let splittedArr: string[] = str.split(' ')

    if (pattern.length !== splittedArr.length) return false


    for (let i: number = 0; i < pattern.length; i++) {
        if (!patternObj[pattern[i]]) {
            let values: any = Object.keys(patternObj).map(key => patternObj[key]);

            if (values.includes(splittedArr[i])) {
                return false
            }
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
console.log(wordPattern("abba", "dog cat cat fish"))
console.log(wordPattern("aaaa", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))



