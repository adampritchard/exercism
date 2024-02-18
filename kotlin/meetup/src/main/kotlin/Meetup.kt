import java.time.DayOfWeek
import java.time.LocalDate
import java.time.temporal.TemporalAdjusters as Cal

class Meetup(val month: Int, val  year: Int) {
    fun day(dayOfWeek: DayOfWeek, schedule: MeetupSchedule): LocalDate {
        val date = LocalDate.of(year, month, 1)

        return when (schedule) {
            MeetupSchedule.FIRST -> date.with(Cal.firstInMonth(dayOfWeek))
            MeetupSchedule.SECOND -> date.with(Cal.dayOfWeekInMonth(2, dayOfWeek))
            MeetupSchedule.THIRD -> date.with(Cal.dayOfWeekInMonth(3, dayOfWeek))
            MeetupSchedule.FOURTH -> date.with(Cal.dayOfWeekInMonth(4, dayOfWeek))
            MeetupSchedule.LAST -> date.with(Cal.lastInMonth(dayOfWeek))
            MeetupSchedule.TEENTH -> date.plusDays(11).with(Cal.next(dayOfWeek))
        }
    }
}
