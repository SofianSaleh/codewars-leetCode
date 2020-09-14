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
    let i = 0;
    let j = S.length - 1;

    while (i < j) {
        while (i < j && !isAlpha(S[i])) {
            i += 1
        }
        while (i < j) {
            j -= 1
        }
        S[i], S[j] = S[j], S[i]
        i += 1
        j -= 1
    }
};

// To check if its a letter or not
var isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch);
}
