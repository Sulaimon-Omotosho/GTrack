import { db } from '@/lib/db'
import { saltAndHashPassword } from '@/utils/helper'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    const hashedPassword = await saltAndHashPassword(password)

    const newUser = await db.user.create({
      data: {
        email,
        hashedPassword,
      },
    })

    return NextResponse.json(
      { user: { id: newUser.id, email: newUser.email } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
