function canCompleteCircuit(gas: number[], cost: number[]): number {
  let fuel: number = 0;
  let net: number = 0;
  let sum: number = 0;

  for (let i = 0; i < gas.length; i++) {
    net += gas[i] - cost[i];
    sum += gas[i] - cost[i];

    if (sum < 0) {
      sum = 0;
      ans = i + 1;
    }
  }
}
