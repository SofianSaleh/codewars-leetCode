/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */


class UndergroundSystem:
  def __init__(self):
    self.checkIns = {}
    self.checkOuts = defaultdict(lambda: [0, 0])

  def checkIn(self, id: int, stationName: str, t: int) -> None:
    self.checkIns[id] = (stationName, t)

  def checkOut(self, id: int, stationName: str, t: int) -> None:
    startStation, startTime = self.checkIns.pop(id)
    self.checkOuts[(startStation, stationName)][0] += 1
    self.checkOuts[(startStation, stationName)][1] += t - startTime

  def getAverageTime(self, startStation: str, endStation: str) -> float:
    nTrips, totalTime = self.checkOuts[(startStation, endStation)]
    return totalTime / nTrips
