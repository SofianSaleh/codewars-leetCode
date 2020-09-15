var lengthOfLastWord = function (s) {
    let str = s.split(' ')
    let i = str.length - 1
    console.log(str)
    while (i >= 0) {
        if (str[i] !== '') {
            return str[i].length
        } else {
            i -= 1
        }
    }
    return str[str.length - 1].length

};
console.log(lengthOfLastWord('a '))