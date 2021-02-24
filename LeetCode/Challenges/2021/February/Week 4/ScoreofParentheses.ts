function scoreOfParentheses(S: string): number {
  let ans: number = 0;
  let layer: number = 0;

  for (let i = 0; i + 1 < S.length; i++) {
    let a: string = S.charAt(i);
    let b: string = S.charAt(i + 1);

    if( a === '('  && b === ')')
  }

  return ans;
}
