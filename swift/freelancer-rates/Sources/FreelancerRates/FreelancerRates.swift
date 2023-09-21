func dailyRateFrom(hourlyRate: Int) -> Double {
  Double(hourlyRate) * 8.0
}

func monthlyRateFrom(hourlyRate: Int, withDiscount discount: Double) -> Double {
  let monthlyRate = dailyRateFrom(hourlyRate: hourlyRate) * 22.0 * (100.0 - discount) / 100.0
	return monthlyRate.rounded()
}

func workdaysIn(budget: Double, hourlyRate: Int, withDiscount discount: Double) -> Double {
  let dailyRate = dailyRateFrom(hourlyRate: hourlyRate) * (100.0 - discount) / 100.0
	return (budget / dailyRate).rounded(.down)
}
