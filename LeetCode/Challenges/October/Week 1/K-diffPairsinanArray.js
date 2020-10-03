/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  let ans = 0;
    let dict = {}
  for(const [index, element] of nums.entries()){
      if(!!dict[index]){
          dict[index] = element
      }
  }
  for(const [index, element] of nums.entries()){
      let target = num + k
      if(!!dict[target]+)
  }
  
};

// def findPairs(self, nums: List[int], k: int) -> int:
//         for i, num in enumerate(nums):
//             target = num + k
//             if target in dict and dict[target] != i:
//                 ans += 1
//                 del dict[target]

//         return ans
