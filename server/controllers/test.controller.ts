const moment = require('moment')

import { Schedule } from '../models/schedule.model';
import { Performance } from '../models/performance.model';
import { Optimizer } from '../services/optimizer.service';

interface PingResponse {
  message: string
}

export default class TestController {
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong",
    }
  }

  public test(): any {
    return {
      message: Optimizer.test(),
    }
  }

  public getSchedule(objects: any): Array<Schedule> {

    const performances: Array<Performance> = [];

    objects.forEach((p: Performance) => {
      const performance = new Performance();
      performance.band = p.band;
      performance.start = moment(p.start);
      performance.finish = moment(p.finish);
      performance.priority = p.priority;
      performances.push(performance);
    })
    return Optimizer.provideSchedule(performances);
  }
}