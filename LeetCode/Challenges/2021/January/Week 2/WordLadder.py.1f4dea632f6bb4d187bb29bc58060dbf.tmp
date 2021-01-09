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
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0

        ans = 0
        q = deque([beginWord])
        beginWordList = list(beginWord)

        while q:
            ans += 1
            for _ in range(len(q)):
                wordList = list(q.popleft())
                for i, cache in enumerate(wordList):
                    for c in string.ascii_lowercase:
                        wordList[i] = c
                        word = ''.join(wordList)
                        if ''.join(word) == endWord:
                            return ans + 1
                        if word in wordSet:
                            wordSet.remove(word)
                            q.append(word)
                    wordList[i] = cache

        return 0


x = Solution()

# print(x.ladderLength(beginWord="hit", endWord="cog", wordList=[
#       "hot", "dot", "dog", "lot", "log", "cog"]))  # 5

# print(x.ladderLength(beginWord="hit", endWord="cog",
#                      wordList=["hot", "dot", "dog", "lot", "log"]))  # 0
