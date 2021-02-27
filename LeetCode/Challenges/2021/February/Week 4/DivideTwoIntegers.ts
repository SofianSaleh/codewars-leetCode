function divide(dividend: number, divisor: number): number {
  if (dividend === 2 ** 31 && divisor > -1) return 2 ** 31 - 1;
}
