object ETL {
    fun transform(source: Map<Int, Collection<Char>>): Map<Char, Int> {
        val result = mutableMapOf<Char, Int>()
        for ((score, chars) in source) {
            for (char in chars) {
                result[char.lowercaseChar()] = score
            }
        }

        return result
    }
}
