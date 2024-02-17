enum class Orientation {
    NORTH {
        override fun rotatedClockwise(): Orientation = EAST
        override fun rotatedCounterClockwise(): Orientation = WEST
    },
    EAST {
        override fun rotatedClockwise(): Orientation = SOUTH
        override fun rotatedCounterClockwise(): Orientation = NORTH
    },
    SOUTH {
        override fun rotatedClockwise(): Orientation = WEST
        override fun rotatedCounterClockwise(): Orientation = EAST
    },
    WEST {
        override fun rotatedClockwise(): Orientation = NORTH
        override fun rotatedCounterClockwise(): Orientation = SOUTH
    };

    abstract fun rotatedClockwise(): Orientation
    abstract fun rotatedCounterClockwise(): Orientation
}
