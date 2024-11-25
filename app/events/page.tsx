import { getAllEvents } from '@/lib/api'
import { EventCard } from '@/components/EventCard'
import { SearchBar } from '@/components/SearchBar'

export const metadata = {
  title: 'Events | Hungry Crush',
  description: 'Discover exciting culinary events in your area.',
}

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <SearchBar className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}