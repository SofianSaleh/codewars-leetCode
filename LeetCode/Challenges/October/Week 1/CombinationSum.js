var combinationSum = function (candidates, target) {
  var dfs = (target, s, path) => {
    if (target < 0) return;

    if (target === 0) {
      ans.push(path);
      return;
    }

    for (let i = s; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(target - candidates[i], i, path);
    }
  };

  let ans = [];

  candidates.sort();
  dfs(target, 0, []);
  return ans;
};
