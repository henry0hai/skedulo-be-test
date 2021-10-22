import { ConnectionOptions } from "typeorm"
import { Performance } from '../../models/performance.model'
import { Schedule } from '../../models/schedule.model'

import dotenv from "dotenv"
dotenv.config()

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  entities: [Performance, Schedule],
  synchronize: true,
}

export default config