class School {
    val students: MutableMap<String, Int> = mutableMapOf()

    fun add(student: String, grade: Int) {
        students[student] = grade
    }

    fun grade(grade: Int): List<String> {
        return students
            .filter { (_, g) -> g == grade }
            .keys.sorted()
    }

    fun roster(): List<String> {
        return students
            .toList()
            .sortedWith(compareBy(
                { (_, grade) -> grade },
                { (name, _) -> name })
            )
            .map { (name, _) -> name }
    }
}
