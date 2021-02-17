function maxArea(height: number[]): number {
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    let area = 0;

    for (let j = i + 1; j < height.length; j++) {
      area = Math.abs(height[i] - height[j]) * (i + 1 * j + 1);
      if (area > ans) area = ans;
    }
  }

  return ans;
}
