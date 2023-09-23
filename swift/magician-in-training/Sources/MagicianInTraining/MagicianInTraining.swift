func getCard(at index: Int, from stack: [Int]) -> Int {
  stack[index]
}

func setCard(at index: Int, in stack: [Int], to newCard: Int) -> [Int] {
  var newStack = stack
  if index >= 0 && index < newStack.count {
    newStack[index] = newCard
  }
  return newStack
}

func insert(_ newCard: Int, atTopOf stack: [Int]) -> [Int] {
  var newStack = stack
  newStack.append(newCard)
  return newStack
}

func removeCard(at index: Int, from stack: [Int]) -> [Int] {
  var newStack = stack
  if index >= 0 && index < newStack.count {
    newStack.remove(at: index)
  }
  return newStack
}

func removeTopCard(_ stack: [Int]) -> [Int] {
  stack.dropLast()
}

func insert(_ newCard: Int, atBottomOf stack: [Int]) -> [Int] {
  var newStack = stack
  newStack.insert(newCard, at: 0)
  return newStack
}

func removeBottomCard(_ stack: [Int]) -> [Int] {
  Array(stack.dropFirst())
}

func checkSizeOfStack(_ stack: [Int], _ size: Int) -> Bool {
  stack.count == size
}

func evenCardCount(_ stack: [Int]) -> Int {
  return stack.reduce(0) { (result, value) in
    result + (value % 2 == 0 ? 1 : 0)
  }
}
