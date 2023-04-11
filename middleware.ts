import { NextResponse } from 'next/server'

export function middleware() {
  return NextResponse.redirect('http://127.0.0.1:3000/')
}

export const config = {
  matcher: ['/middleware'],
}
