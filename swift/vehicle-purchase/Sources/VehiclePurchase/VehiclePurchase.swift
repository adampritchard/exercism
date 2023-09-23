func canIBuy(vehicle: String, price: Double, monthlyBudget: Double) -> String {
  let fiveYearBudget = monthlyBudget * 12 * 5

  if price <= fiveYearBudget {
    return "Yes! I'm getting a \(vehicle)"
  } else if price <= fiveYearBudget * 1.1 {
    return "I'll have to be frugal if I want a \(vehicle)"
  } else {
    return "Darn! No \(vehicle) for me"
  }
}

func licenseType(numberOfWheels wheels: Int) -> String {
  if wheels == 2 || wheels == 3 {
    return "You will need a motorcycle license for your vehicle"
  } else if wheels == 4 || wheels == 6 {
    return "You will need an automobile license for your vehicle"
  } else if wheels == 18 {
    return "You will need a commercial trucking license for your vehicle"
  } else {
    return "We do not issue licenses for those types of vehicles"
  }
}

func calculateResellPrice(originalPrice: Int, yearsOld: Int) -> Int {
  let depreciation = getDepreciation(age: yearsOld)
  return Int(Double(originalPrice) * depreciation)
}

func getDepreciation(age: Int) -> Double {
  if age < 3 {
    return 0.8
  } else if age < 10 {
    return 0.7
  } else {
    return 0.5
  }
}
