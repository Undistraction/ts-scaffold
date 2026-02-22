import express from 'express'
import { LOG_LEVEL } from '../const/LOG_LEVEL'
import { db } from '../db'
import { logEntries } from '../db/schema'

export const app = express()

app.get(`/ping`, (_req, res) => {
  db.insert(logEntries)
    .values({
      message: `Ping`,
      level: LOG_LEVEL.INFO,
    })
    .run()
  res.json({ success: true })
})
