let workHoursInDay = 8.0
let workDaysInMonth = 22.0

func dailyRateFrom(hourlyRate: Int) -> Double {
  Double(hourlyRate) * workHoursInDay
}

func monthlyRateFrom(hourlyRate: Int, withDiscount discount: Double) -> Double {
  let monthlyRate = dailyRateFrom(hourlyRate: hourlyRate) * workDaysInMonth
	let discountedRate = applyDiscount(discount, toRate: monthlyRate)
	return discountedRate.rounded()
}

func workdaysIn(budget: Double, hourlyRate: Int, withDiscount discount: Double) -> Double {
	let dailyRate = dailyRateFrom(hourlyRate: hourlyRate)
  let discountedRate = applyDiscount(discount, toRate: dailyRate)
	return (budget / discountedRate).rounded(.down)
}

func applyDiscount(_ discount: Double, toRate rate: Double) -> Double {
	rate * (1.0 - discount * 0.01)
}
