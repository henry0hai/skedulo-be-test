import cors from 'cors'
import { createConnection } from 'typeorm'
import swaggerUi from 'swagger-ui-express'
import { ValidateError } from "tsoa"
import express, { Response as ExResponse, Request as ExRequest, NextFunction } from 'express'

import routers from './routes/index.route'
import dbConfig from './database/configs/dev.config'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', routers)

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../dist/server/swagger.json')))
})

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    })
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    })
  }

  next()
})

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  })
})

createConnection(dbConfig)
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log(`App is running at http://localhost: ${app.get('port')} in ${app.get('env')} mode`)
      console.log('Press CTRL-C to stop\n')
    })
  })
  .catch(err => {
    console.log('Unable to connect to db', err)
    process.exit(1)
  })

export default app
