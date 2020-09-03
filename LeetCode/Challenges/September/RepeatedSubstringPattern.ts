function repeatedSubstringPattern(s: string): boolean {
    let len: number = s.length

    for (let i: number = len / 2; i >= 1; i--) {
        if (len % i === 0) {
            let repeat = len / i
            let substring: string = s.slice(0, i)
            let stringBuilder: string = ''
            for (let j = 0; j < repeat; j++) {
                stringBuilder += substring
            }
            if (s === stringBuilder) return true
        }

    }
    return false
};

console.log(repeatedSubstringPattern("abab"))   // true
console.log(repeatedSubstringPattern("aba"))    // false
console.log(repeatedSubstringPattern("abcabcabcabc"))   // true
