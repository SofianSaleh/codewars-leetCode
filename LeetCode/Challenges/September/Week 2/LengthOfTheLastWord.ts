var lengthOfLastWord = function (s) {
    let ans = 0
    let str = s.split(' ')
    return str[str.length - 1].length

};