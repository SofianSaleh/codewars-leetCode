class UndergroundSystem {
  obj: {};
  constructor() {
   this.checkIns = {}
    this.checkOuts = defaultdict(lambda: [0, 0]);
  }

  checkIn(id: number, stationName: string, t: number): void {}

  checkOut(id: number, stationName: string, t: number): void {}

  getAverageTime(startStation: string, endStation: string): number {}
}
{
  stationdep: {
    time: 0;
    stationEnd: [id, time];
  }
}
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
