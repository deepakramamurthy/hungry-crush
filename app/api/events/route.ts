import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const featured = searchParams.get('featured')

  try {
    let events
    if (query) {
      events = await prisma.event.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        } as Prisma.EventWhereInput,
        include: { restaurant: true },
      })
    } else if (featured === 'true') {
      events = await prisma.event.findMany({
        where: {
          featured: true
        } as Prisma.EventWhereInput,
        orderBy: { date: 'asc' },
        include: { restaurant: true },
      })
    } else {
      events = await prisma.event.findMany({
        include: { restaurant: true },
      })
    }
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const event = await prisma.event.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image,
        date: new Date(body.date),
        featured: body.featured ?? false,
        restaurant: {
          connect: { id: body.restaurantId }
        }
      } as Prisma.EventCreateInput,
    })
    return NextResponse.json(event)
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json({ error: 'Error creating event' }, { status: 500 })
  }
}