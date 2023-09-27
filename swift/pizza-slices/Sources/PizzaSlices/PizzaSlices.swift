import Foundation

func sliceSize(diameter: Double?, slices: Int?) -> Double? {
  guard let diameter = diameter, let slices = slices else {
    return nil
  }

  guard slices > 0 && diameter >= 0 else {
    return nil
  }

  let r = diameter / 2
  return Double.pi * r * r / Double(slices)
}

func biggestSlice(
  diameterA: String, slicesA: String,
  diameterB: String, slicesB: String
) -> String {
  let sizeA = sliceSize(diameter: Double(diameterA), slices: Int(slicesA))
  let sizeB = sliceSize(diameter: Double(diameterB), slices: Int(slicesB))

  if sizeA == sizeB {
    return "Neither slice is bigger"
  }

  guard let sizeA = sizeA else {
    return "Slice B is bigger"
  }

  guard let sizeB = sizeB else {
    return "Slice A is bigger"
  }

  if sizeA > sizeB {
    return "Slice A is bigger"
  } else {
    return "Slice B is bigger"
  }
}
