class Robot(
    var gridPosition: GridPosition = GridPosition(0, 0),
    var orientation: Orientation = Orientation.NORTH,
) {
    fun simulate(instructions: String) {
        for (instruction in instructions) {
            when (instruction) {
                'L' -> rotateLeft()
                'R' -> rotateRight()
                'A' -> advance()
            }
        }
    }

    private fun rotateLeft() {
        orientation = orientation.rotatedCounterClockwise()
    }

    private fun rotateRight() {
        orientation = orientation.rotatedClockwise()
    }

    private fun advance() {
        gridPosition = when (orientation) {
            Orientation.NORTH -> GridPosition(gridPosition.x, gridPosition.y + 1)
            Orientation.EAST -> GridPosition(gridPosition.x + 1, gridPosition.y)
            Orientation.SOUTH -> GridPosition(gridPosition.x, gridPosition.y - 1)
            Orientation.WEST -> GridPosition(gridPosition.x - 1, gridPosition.y)
        }
    }
}
