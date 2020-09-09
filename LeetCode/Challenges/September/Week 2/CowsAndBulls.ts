// # You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// # Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows.

// # Please note that both secret number and friend's guess may contain duplicate digits.


// # Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
// # Note: You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.


// # class Solution:
// #     def getHint(self, secret: str, guess: str) -> str:
// #         bulls = 0
// #         cows = 0
// #         hashTable = {}

// #         for x in secret:
// #             print(x)
// #             print(hashTable,  hashTable[x])

// #             if not hashTable[x]:
// #                 hashTable[x] = 1
// #             else:
// #                 hashTable[x] += 1
// #         print(hashTable)
// #         for i in range(0, len(secret)):
// #             if secret[i] != guess[i]:
// #                 if guess[i] in secret:
// #                     cows += 1
// #             else:
// #                 bulls += 1

// #         return '{0}A{1}B'.format(bulls, cows)


// # x = Solution()
// # print(x.getHint("1123", "0111"))    # "1A1B"
// # # print(x.getHint("1807", "7810"))    # "1A3B"

function getHint(secret: string, guess: string): string {
    let bulls: number = 0
    let cows: number = 0
    let hashTable: any = {}

    for (const x of secret) {
        if (!hashTable[x]) hashTable[x] = 1
        else hashTable[x] += 1

    }
    console.log(hashTable)
    return ''
};
console.log(getHint("1123", "0111"))