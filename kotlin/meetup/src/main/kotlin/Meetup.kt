import java.time.DayOfWeek
import java.time.LocalDate
import java.time.temporal.TemporalAdjusters as Adj

class Meetup(val month: Int, val  year: Int) {
    fun day(dayOfWeek: DayOfWeek, schedule: MeetupSchedule): LocalDate {
        val date = LocalDate.of(year, month, 1)

        return when (schedule) {
            MeetupSchedule.FIRST -> date.with(Adj.firstInMonth(dayOfWeek))
            MeetupSchedule.SECOND -> date.with(Adj.dayOfWeekInMonth(2, dayOfWeek))
            MeetupSchedule.THIRD -> date.with(Adj.dayOfWeekInMonth(3, dayOfWeek))
            MeetupSchedule.FOURTH -> date.with(Adj.dayOfWeekInMonth(4, dayOfWeek))
            MeetupSchedule.LAST -> date.with(Adj.lastInMonth(dayOfWeek))
            MeetupSchedule.TEENTH -> {
                var result = date.with(Adj.firstInMonth(dayOfWeek))
                while (result.dayOfMonth < 13) {
                    result = result.with(Adj.next(dayOfWeek))
                }
                result
            }
        }
    }
}
