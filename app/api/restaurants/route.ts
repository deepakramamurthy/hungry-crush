import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const featured = searchParams.get('featured')

  try {
    let restaurants
    if (query) {
      restaurants = await prisma.restaurant.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
            { cuisine: { contains: query, mode: 'insensitive' } },
          ],
        } as Prisma.RestaurantWhereInput,
      })
    } else if (featured === 'true') {
      restaurants = await prisma.restaurant.findMany({
        where: {
          featured: true
        } as Prisma.RestaurantWhereInput,
        orderBy: { rating: 'desc' },
      })
    } else {
      restaurants = await prisma.restaurant.findMany()
    }
    return NextResponse.json(restaurants)
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    return NextResponse.json({ error: 'Error fetching restaurants' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const restaurant = await prisma.restaurant.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image,
        address: body.address,
        cuisine: body.cuisine,
        priceRange: body.priceRange,
        rating: body.rating,
        featured: body.featured ?? false,
      } as Prisma.RestaurantCreateInput,
    })
    return NextResponse.json(restaurant)
  } catch (error) {
    console.error('Error creating restaurant:', error)
    return NextResponse.json({ error: 'Error creating restaurant' }, { status: 500 })
  }
}