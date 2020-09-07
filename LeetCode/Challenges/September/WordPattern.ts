var wordPattern = function (pattern, str) {
    let patternObj = {}
    let splittedArr = str.split(' ')

    for (let i = 0; i < pattern.length; i++) {
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

c