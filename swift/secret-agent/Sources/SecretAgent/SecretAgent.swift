func protectSecret(_ secret: String, withPassword password: String) -> (String) -> String {
  func fn(_ pwAttempt: String) -> String {
    pwAttempt == password
      ? secret
      : "Sorry. No hidden secrets here."
  }

  return fn
}

func generateCombination(forRoom room: Int, usingFunction f: (Int) -> Int) -> (Int, Int, Int) {
  let n1 = f(room)
  let n2 = f(n1)
  let n3 = f(n2)
  return (n1, n2, n3)
}
