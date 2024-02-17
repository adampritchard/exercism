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
        orientation = when (orientation) {
            Orientation.NORTH -> Orientation.WEST
            Orientation.EAST -> Orientation.NORTH
            Orientation.SOUTH -> Orientation.EAST
            Orientation.WEST -> Orientation.SOUTH
        }
    }

    private fun rotateRight() {
        orientation = when (orientation) {
            Orientation.NORTH -> Orientation.EAST
            Orientation.EAST -> Orientation.SOUTH
            Orientation.SOUTH -> Orientation.WEST
            Orientation.WEST -> Orientation.NORTH
        }
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
