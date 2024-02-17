class Robot(
    var gridPosition: GridPosition = GridPosition(0, 0),
    var orientation: Orientation = Orientation.NORTH,
) {
    fun simulate(instructions: String) {
        instructions.forEach {
            when (it) {
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
        gridPosition = with (gridPosition) {
            when (orientation) {
                Orientation.NORTH -> GridPosition(x, y + 1)
                Orientation.EAST -> GridPosition(x + 1, y)
                Orientation.SOUTH -> GridPosition(x, y - 1)
                Orientation.WEST -> GridPosition(x - 1, y)
            }
        }
    }
}
