import kotlin.math.floor
import kotlin.random.Random

class DndCharacter {
    val strength: Int = ability()
    val dexterity: Int = ability()
    val constitution: Int = ability()
    val intelligence: Int = ability()
    val wisdom: Int = ability()
    val charisma: Int = ability()
    val hitpoints = 10 + modifier(constitution)

    companion object {
        fun diceRoll() = Random.nextInt(from = 1, until = 7)

        fun ability(): Int {
            val rolls = mutableListOf<Int>(
                diceRoll(),
                diceRoll(),
                diceRoll(),
                diceRoll(),
            )
            rolls.sort()
            rolls.removeAt(0)
            return rolls.sum()
        }

        fun modifier(score: Int): Int {
            val mod = (score - 10) / 2.0
            return when {
                mod < 0 -> floor(mod).toInt()
                else -> mod.toInt()
            }
        }
    }
}
