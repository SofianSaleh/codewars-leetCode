function brokenCalc(X: number, Y: number): number {
  let ops = 0;
  while (X < Y) {
    if (Y % 2 === 0) {
      Y = Math.floor(Y / 2);
    }
  }
}
