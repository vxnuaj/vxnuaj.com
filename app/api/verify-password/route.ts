// app/api/verify-password/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();

  // Check the password against the environment variable
  if (password === process.env.PASSWORD) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
