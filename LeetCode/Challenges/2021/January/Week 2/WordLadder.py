# Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

# Only one letter can be changed at a time.
# Each transformed word must exist in the word list.
# Return 0 if there is no such transformation sequence.


# Example 1:

# Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
# Output: 5
# Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
# Example 2:

# Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
# Output: 0
# Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.


# Constraints:

# 1 <= beginWord.length <= 100
# endWord.length == beginWord.length
# 1 <= wordList.length <= 5000
# wordList[i].length == beginWord.length
# beginWord, endWord, and wordList[i] consist of lowercase English letters.
# beginWord != endWord
# All the strings in wordList are unique.


class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        tempArr = [beginWord, endWord]
        count = 0
        for i in range(2):
            length = len(tempArr[i])
            for j in range(0, len(wordList)):
                if(tempArr[i] == wordList[j]):
                    count += 1
                    break
                else:
                    c = 0
                    for k in range(len(wordList[j])):
                        if tempArr[i][k] in wordList[j]:
                            c += 1
                    if c == length or c == length - 1:
                        count += 1
        return count


x = Solution()

print(x.ladderLength(beginWord="hit", endWord="cog", wordList=[
      "hot", "dot", "dog", "lot", "log", "cog"]))  # 5

print(x.ladderLength(beginWord="hit", endWord="cog",
                     wordList=["hot", "dot", "dog", "lot", "log"]))  # 0
