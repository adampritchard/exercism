func timeToPrepare(drink: String) -> Double {
  switch drink {
    case "beer", "soda", "water": return 0.5
    case "shot": return 1.0
    case "mixed drink": return 1.5
    case "fancy drink": return 2.5
    case "frozen drink": return 3.0
    default: fatalError("unknown drink: '\(drink)'")
  }
}

func timeToPrepare(drinks: [String]) -> Double {
  drinks.reduce(0.0) { time, drink in
    time + timeToPrepare(drink: drink)
  }
}

func wedgeCount(forSize size: String) -> Int {
  switch size {
    case "small":  return 6
    case "medium": return 8
    case "large":  return 10
    default: fatalError("unknown size \(size)")
  }
}

func makeWedges(needed: Int, limes: [String]) -> Int {
  var limesUsed = 0
  var stillNeeded = needed

  while stillNeeded > 0 {
    guard limes.count > limesUsed else {
      break
    }

    stillNeeded -= wedgeCount(forSize: limes[limesUsed])
    limesUsed += 1
  }

  return limesUsed
}

func finishShift(minutesLeft: Int, remainingOrders: [[String]]) -> [[String]] {
  var minutes = Double(minutesLeft)
  var orders = remainingOrders

  while minutes > 0, orders.count > 0 {
    let order = orders.remove(at: 0)
    minutes -= timeToPrepare(drinks: order)
  }

  return orders
}

typealias Tracking = (first: String, last: String, total: Int)

func orderTracker(orders: [(drink: String, time: String)]) -> (beer: Tracking?, soda: Tracking?) {
  var beer: Tracking? = nil
  var soda: Tracking? = nil

  for order in orders {
    if order.drink == "beer" {
      beer = (
        first: beer?.first ?? order.time,
        last: order.time,
        total: (beer?.total ?? 0) + 1
      )
    }

    if order.drink == "soda" {
      soda = (
        first: soda?.first ?? order.time,
        last: order.time,
        total: (soda?.total ?? 0) + 1
      )
    }
  }

  return (beer: beer, soda: soda)
}
