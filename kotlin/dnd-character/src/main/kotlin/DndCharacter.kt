import kotlin.random.Random
import kotlin.random.nextInt

class DndCharacter {
    val strength: Int = ability()
    val dexterity: Int = ability()
    val constitution: Int = ability()
    val intelligence: Int = ability()
    val wisdom: Int = ability()
    val charisma: Int = ability()
    val hitpoints = 10 + modifier(constitution)

    companion object {
        fun diceRoll() = Random.nextInt(1..6)

        fun ability(): Int {
            val rolls = MutableList(4) { diceRoll() }
            rolls.sort()
            rolls.removeAt(0)
            return rolls.sum()
        }

        fun modifier(score: Int) = Math.floorDiv(score - 10, 2)
    }
}
