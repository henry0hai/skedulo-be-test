import { Router, Request, Response } from 'express'

import PingController from "../controllers/ping.controller"

const pingRouter = Router()

pingRouter.get('/', async (request: Request, response: Response) => {
  const controller = new PingController()
  const res = await controller.getMessage()
  return response.send(res)
})

export default pingRouter