import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.redirect('http://127.0.0.1:3000/')
}
