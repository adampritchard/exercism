let prepTimes = [
  "beer":         0.5,
  "soda":         0.5,
  "water":        0.5,
  "shot":         1.0,
  "mixed drink":  1.5,
  "fancy drink":  2.5,
  "frozen drink": 3.0,
]

let wedgeCounts = [
  "small":   6,
  "medium":  8,
  "large":  10,
]

func timeToPrepare(drinks: [String]) -> Double {
  drinks.reduce(0) { time, drink in
    time + prepTimes[drink, default: 0]
  }
}

func makeWedges(needed: Int, limes: [String]) -> Int {
  var limesUsed = 0
  var stillNeeded = needed

  while stillNeeded > 0, limes.count > limesUsed {
    let size = limes[limesUsed]
    stillNeeded -= wedgeCounts[size, default: 0]
    limesUsed += 1
  }

  return limesUsed
}

func finishShift(minutesLeft: Int, remainingOrders: [[String]]) -> [[String]] {
  var minutes = Double(minutesLeft)
  var orders = remainingOrders

  while minutes > 0, !orders.isEmpty {
    let order = orders.removeFirst()
    minutes -= timeToPrepare(drinks: order)
  }

  return orders
}

typealias OrderTimes = (first: String, last: String, total: Int)

func orderTracker(orders: [(drink: String, time: String)]) -> (beer: OrderTimes?, soda: OrderTimes?) {
  var drinks: [String: OrderTimes] = [:]

  for order in orders {
    let drink = drinks[order.drink]
    drinks[order.drink] = (
      first: drink?.first ?? order.time,
      last: order.time,
      total: (drink?.total ?? 0) + 1
    )
  }

  return (beer: drinks["beer"], soda: drinks["soda"])
}
