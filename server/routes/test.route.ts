import { Router, Request, Response } from 'express'

import TestController from "../controllers/test.controller"

const testRouter = Router()

testRouter.get('/', async (request: Request, response: Response) => {
  const controller = new TestController()
  const res = await controller.test()
  return response.send(res)
})

export default testRouter