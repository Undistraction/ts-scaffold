import { LOG_LEVEL } from '@/server/const/log-level'
import { db } from '@/server/db'
import { logEntries } from '@/server/db/schema'
import express, { type Request } from 'express'

export const app = express()

// Middleware
app.use((_req, res, next) => {
  // So that we can connect from the client which is running on a different port
  res.setHeader(`Access-Control-Allow-Origin`, `*`)
  next()
})

// Routes
app.get(`/ping`, (req: Request<{ id: string }>, res) => {
  try {
    db.insert(logEntries)
      .values({
        message: `Ping`,
        level: LOG_LEVEL.INFO,
      })
      .run()
    res.json({ success: true })
  } catch {
    res.status(500).json({ success: false, error: `Internal server error` })
  }
})
