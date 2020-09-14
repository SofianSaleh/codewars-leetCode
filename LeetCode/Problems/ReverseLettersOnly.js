// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place,
// and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122 
// S doesn't contain \ or "

var reverseOnlyLetters = function (S) {
    console.log(S)
    let i = 0;
    let j = S.length - 1;
    let arr = S.split('')

    while (i < j) {
        while (i < j && !isAlpha(arr[i])) {
            i += 1
        }
        console.log(j)
        while (i < j && !isAlpha(arr[j])) {
            j -= 1
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
        console.log(arr[i], arr[j], j, i)
        i += 1
        j -= 1
    }
    return arr.join('')
};

// To check if its a letter or not
var isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch);
}

// console.log(reverseOnlyLetters('ab-cd'))
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
// j-Ih-g    -dCba