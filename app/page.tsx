import { getFeaturedRestaurants, getFeaturedEvents } from '@/lib/api'
import ClientHome from '@/components/ClientHome'
import type { Restaurant, Event } from '@/lib/types'

export default async function Home() {
  // Fetch initial data server-side
  const [restaurants, events] = await Promise.all([
    getFeaturedRestaurants(),
    getFeaturedEvents()
  ])

  return <ClientHome initialRestaurants={restaurants} initialEvents={events} />
}