import java.util.SortedMap

class School {
    val grades: SortedMap<Int, MutableList<String>> = sortedMapOf()

    fun add(student: String, grade: Int) {
        val students = grades.getOrPut(grade) { mutableListOf() }
        students.add(student)
        students.sort()
    }

    fun grade(grade: Int): List<String> {
        return grades.getOrDefault(grade, emptyList())
    }

    fun roster(): List<String> {
        return grades.values.flatten()
    }
}
