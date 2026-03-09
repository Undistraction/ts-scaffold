import { LOG_LEVEL } from '@/const/log-level'
import { db } from '@/db'
import { logEntries } from '@/db/schema'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    await db
      .insert(logEntries)
      .values({
        message: `Ping`,
        level: LOG_LEVEL.INFO,
      })
      .execute()
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: `Internal server error` },
      { status: 500 },
    )
  }
}
