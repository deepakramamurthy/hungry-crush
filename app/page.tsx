import ClientHome from '@/components/ClientHome'
import { getFeaturedRestaurants, getFeaturedEvents } from '@/lib/api'

export default async function Home() {
  const initialRestaurants = await getFeaturedRestaurants()
  const initialEvents = await getFeaturedEvents()

  return <ClientHome initialRestaurants={initialRestaurants} initialEvents={initialEvents} />
}