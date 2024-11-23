import { NextResponse } from 'next/server'

const mockRestaurants = [
  { _id: '1', name: 'Tasty Bites', cuisine: 'Italian', description: 'Authentic Italian cuisine in a cozy atmosphere.' },
  { _id: '2', name: 'Spice Garden', cuisine: 'Indian', description: 'Flavorful Indian dishes with a modern twist.' },
  { _id: '3', name: 'Sushi Haven', cuisine: 'Japanese', description: 'Fresh sushi and traditional Japanese delicacies.' },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get('featured')

  let restaurants = mockRestaurants
  if (featured === 'true') {
    restaurants = restaurants.slice(0, 2) // Return only 2 featured restaurants
  }

  return NextResponse.json(restaurants)
}