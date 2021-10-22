import TestController from "../test.controller"
import {
  generateExample, exampleOptimizer,
  generateMinutes, minutesOptimizer,
  generateOverlapping, overlappingOptimizer,
  generateSeconds, secondsOptimizer,
  generateTimePriority, timePriorityOptimizer,
  generateTimezone, timezoneOptimizer,
} from "../../tests/utils/generate"

const controller = new TestController()

describe("TestController", () => {

  describe("getMessage", () => {
    test("should return pong message", async () => {
      const response = await controller.getMessage()
      expect(response.message).toBe("pong")
    })
  })
  
  describe("test", () => {
    test("should return test message", async () => {
      const response = await controller.test()
      expect(response.message).toBe("OptimizerService")
    })
  })

  describe("scheduler", () => {
    test("should return example.optimal", async () => {
      const response = await controller.getSchedule(generateExample())
      expect(response).toEqual(exampleOptimizer());
    })
  })

  describe("scheduler", () => {
    test("should return minutes-resolution.optimal", async () => {
      const response = await controller.getSchedule(generateMinutes())
      expect(response).toEqual(minutesOptimizer());
    })
  })

  describe("scheduler", () => {
    test("should return overlapping.optimal", async () => {
      const response = await controller.getSchedule(generateOverlapping())
      expect(response).toEqual(overlappingOptimizer());
    })
  })

  describe("scheduler", () => {
    test("should return seconds-resolution.optimal", async () => {
      const response = await controller.getSchedule(generateSeconds())
      expect(response).toEqual(secondsOptimizer());
    })
  })

  describe("scheduler", () => {
    test("should return time-priority.optimal", async () => {
      const response = await controller.getSchedule(generateTimePriority())
      expect(response).toEqual(timePriorityOptimizer());
    })
  })

  describe("scheduler", () => {
    test("should return timezone.optimal", async () => {
      const response = await controller.getSchedule(generateTimezone())
      expect(response).toEqual(timezoneOptimizer());
    })
  })

})
