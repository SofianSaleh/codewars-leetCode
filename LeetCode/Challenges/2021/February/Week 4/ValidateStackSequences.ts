function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack: number[] = [];
  let j: number = 0;

  for (const x: number of pushed) {
    stack.push(x);

    while (
      stack &&
      j < popped.length &&
      stack[stack.length - 1] === popped[j]
    ) {
      stack.pop();
      j++;
    }
  }
}
