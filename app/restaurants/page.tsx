import { getAllRestaurants } from '@/lib/api'
import { RestaurantCard } from '@/components/RestaurantCard'
import { SearchBar } from '@/components/SearchBar'

export const metadata = {
  title: 'Restaurants | Hungry Crush',
  description: 'Discover and book the best restaurants in your area.',
}

export default async function RestaurantsPage() {
  const restaurants = await getAllRestaurants()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Restaurants</h1>
      <SearchBar className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}