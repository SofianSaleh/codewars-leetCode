function maxArea(height: number[]): number {
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    let area = 0;

    for (let j = i + 1; j < height.length; j++) {
      area = Math.min(height[i], height[j]) * Math.abs(i - j);
      console.log(area);
      if (area > ans) area = ans;
    }
  }

  return ans;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
