import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  const data = await request.json()
  const { name, email } = data

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email! },
      data: { name, email },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ message: "Error updating profile" }, { status: 500 })
  }
}