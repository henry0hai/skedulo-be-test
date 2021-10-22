import { Router } from 'express'
import pingRouter from './ping.route'
import testRouter from './test.route'

const router = Router()

router.use('/ping', pingRouter)
router.use('/test', testRouter)

export default router