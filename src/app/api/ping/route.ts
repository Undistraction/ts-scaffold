import { ping } from '@/lib/ping'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    await ping()
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: `Internal server error` },
      { status: 500 },
    )
  }
}
