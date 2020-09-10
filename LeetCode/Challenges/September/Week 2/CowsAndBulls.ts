// # You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// # Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.

// # Please note that both secret number and friend's guess may contain duplicate digits.


// # Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
// # Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

// #########################    TYPESCRIPT  #########################

function getHint(secret: string, guess: string): string {
    let bulls: number = 0
    let cows: number = 0
    let hashTable: any = {}

    for (const x of secret) {
        if (!hashTable[x]) hashTable[x] = 1
        else hashTable[x] += 1

    }
    console.log(hashTable)

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls += 1
            hashTable[guess[i]] -= 1
            if (hashTable[guess[i]] < 0) {
                hashTable[guess[i]] += 1
                cows -= 1
            }
        } else if (secret[i] !== guess[i]) {
            console.log(secret.indexOf(guess[i]) !== -1 && hashTable[guess[i]] > 0, guess[i])
            if (secret.indexOf(guess[i]) !== -1 && hashTable[guess[i]] > 0) {

                cows += 1
                hashTable[guess[i]] -= 1

            }
        }
    }
    //       if secret[i] != guess[i]:

    return `${bulls}A${cows}B`
};
// console.log(getHint("1123", "0111"))
console.log(getHint("1122", "1222"))


// #########################    JAVASCRIPT  #########################

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// var getHint = function(secret, guess) {

    //     let bulls = 0
//     let cows = 0
//     let hashTable = {}

//     for (const x of secret) {
    //         if (!hashTable[x]) hashTable[x] = 1
    //         else hashTable[x] += 1

    //     }

    //     for (let i = 0; i < secret.length; i++) {
//         if (secret[i] === guess[i]) {
    //             bulls += 1
    //             hashTable[guess[i]] -= 1
    //              if (hashTable[guess[i]] < 0) {
        //                 hashTable[guess[i]] += 1
        //                 cows -= 1
        //             }
        //         } else if (secret[i] !== guess[i]) {
            //             if (secret.includes(guess[i]) && hashTable[guess[i]] > 0) {

                //                 cows += 1
//                 hashTable[guess[i]] -= 1

//             }
//         }
//     }
//     return `${bulls}A${cows}B`
// };

// #########################    PYTHON  #########################

// class Solution:

//     def getHint(self, secret: str, guess: str) -> str:
//         bulls = 0
//         cows = 0
//         hashTable = {}

//         for x in secret:

//             if not hashTable.get(x):
//                 hashTable[x] = 1
//             else:
//                 hashTable[x] += 1

//         for i in range(0, len(secret)):
//             if secret[i] == guess[i]:

//                 bulls += 1
//                 hashTable[guess[i]] -= 1
//                 if hashTable[guess[i]] < 0:
//                     hashTable[guess[i]] += 1
//                     cows -= 1
//             elif secret[i] != guess[i]:
//                 if guess[i] in secret and hashTable[guess[i]] > 0:
//                     cows += 1
//                     hashTable[guess[i]] -= 1

//         return '{0}A{1}B'.format(bulls,cows)
