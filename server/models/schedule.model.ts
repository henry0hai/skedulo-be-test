const moment = require('moment')

const dateTimeFormat8601 = "YYYY-MM-DD[T]HH:mm:ss[Z]"

export class Schedule {
  band!: string;
  start!: string;
  finish!: string;

  convertStartDateTo8601Format(date: Date) {
    this.start = moment(date).utc().format(dateTimeFormat8601)
  }

  convertFinishDateTo8601Format(date: Date) {
    this.finish = moment(date).utc().format(dateTimeFormat8601)
  }
}