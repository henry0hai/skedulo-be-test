import { Schedule } from "../models/schedule.model"
import { Performance } from "../models/performance.model"

const moment = require('moment')

// const dateTimeFormat8601 = "YYYY-MM-DD[T]HH:mm:ss[Z]"

class OptimizerService {

  public test(): string {
    return "OptimizerService"
  }

  public provideSchedule(performances: Array<Performance>): Array<Schedule> {
    const schedules: Array<Schedule> = []

    // Flatted event into date sorted by date ASC
    const events = performances.flatMap((p: Performance) => [p.start, p.finish])
      .sort((a: Date, b: Date) => a > b ? 1 : b > a ? -1 : 0)
      .map((e: Date) => new Date(e).getTime()) // convert to number
      .filter((e: number, i: number, array: number[]) => array.indexOf(e) === i) // make unique array
      .map((e: number) => moment(e)) // convert back to date

    const performanceEvents = events.map((event: Date) => {
      const performancesPlaying = performances.filter((p: Performance) => p.isPlaying(event))
      const earlyStarts = performancesPlaying.sort((p1: Performance, p2: Performance) => {
        if (p1.priority === p2.priority) {
          return new Date(p1.start).getTime() - new Date(p2.start).getTime();
        }
        return p2.priority - p1.priority;
      })

      return earlyStarts[0]
    })

    performanceEvents.reduce((previous: Performance, current: Performance) => {
      const schedule = this.createSchedule(previous, current)
      if (schedule) {
        schedules.push(schedule)
      }
      return current
    }, new Performance())

    const uniqueSchedule = this.uniqueSchedule(schedules);
    return uniqueSchedule
  }

  private uniqueSchedule(schedules: Schedule[]): Schedule[] {
    return schedules.filter((s: Schedule, i: number) => {
      const origin = JSON.stringify(s);
      return i === schedules.findIndex((o: Schedule) => {
        return JSON.stringify(o) === origin;
      })
    })
  }

  private createSchedule(px: Performance, py: Performance): Schedule | null {
    // check empty px
    if (!px.band) {
      return null
    }

    // Break event if priority x < priority y
    if (px.priority < py.priority) {
      if (px.isPlaying(py.start)) {
        const schedule = this.toSchedule(px)
        // schedule.finish = moment(py.start).utc().format(dateTimeFormat8601)
        schedule.convertFinishDateTo8601Format(py.start)
        return schedule
      }
    }

    // Case same priority continue with current one
    if (px.priority === py.priority) {
      return this.toSchedule(px)
    }

    // Else priority x > priority y 
    if (px.priority > py.priority) {
      const schedule = this.toSchedule(py)
      // schedule.start = moment(px.finish).utc().format(dateTimeFormat8601)
      schedule.convertStartDateTo8601Format(px.finish)
      return schedule
    }

    return null
  }

  private toSchedule(p: Performance): Schedule {
    const schedule = new Schedule()
    schedule.band = p.band
    // schedule.start = moment(p.start).utc().format(dateTimeFormat8601)
    schedule.convertStartDateTo8601Format(p.start)
    // schedule.finish = moment(p.finish).utc().format(dateTimeFormat8601)
    schedule.convertFinishDateTo8601Format(p.finish)
    return schedule
  }
}

export const Optimizer = new OptimizerService();