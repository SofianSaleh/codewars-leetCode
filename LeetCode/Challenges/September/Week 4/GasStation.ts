function canCompleteCircuit(gas: number[], cost: number[]): number {
  let fuel: number = 0;

  for (let i = 0; i < gas.length; i++) {
		fuel = 0;
		let x =  gas.length - i +
    for (let j = i; j < gas.length; j++) {
      fuel += gas[j];
      if (j !== 0) {
        fuel -= cost[i];
        if (fuel <= 0) return -1;
      }
    }
  }
  return -1;
}
