// # cl/**
 * @param {number[]} arr
* @param {number} target
* @return {number}
*/
var threeSumMulti = function(arr, target) {
    const kMod = 1e9 + 7;
    let ans = 0;
    let count = {};
    for (const a of  A)
      ++count[a];
   
};
class Solution {
 public:
  int threeSumMulti(vector<int>& A, int target) {



    for (const auto& [i, x] : count)
      for (const auto& [j, y] : count) {
        int k = target - i - j;
        if (!count.count(k))
          continue;
        if (i == j && j == k)
          ans += x * (x - 1) * (x - 2) / 6;
        else if (i == j && j != k)
          ans += x * (x - 1) / 2 * count[k];
        else if (i < j && j < k)
          ans += x * y * count[k];
      }

    return ans % kMod;
  }
};