import Image from 'next/image'
import Link from 'next/link'
import { Event } from '@/lib/types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.image || '/placeholder.svg'}
          alt={event.name}
          fill
          className="object-cover"
        />
        {event.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
        <p className="text-muted-foreground mb-2">{event.restaurantName}</p>
        <div className="flex items-center text-sm mb-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {new Date(event.date).toLocaleDateString()}
        </div>
        <p className="text-sm line-clamp-2">{event.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}