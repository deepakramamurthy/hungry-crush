'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from 'lucide-react'

interface Event {
  _id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  restaurantName: string;
  restaurantId: string;
  image: string;
  location: string;
}

async function getEvent(id: string): Promise<Event> {
  // This is a mock function. Replace with actual API call later.
  return {
    _id: id,
    name: "Wine Tasting Evening",
    date: "2024-12-15",
    time: "19:00",
    description: "Join us for an exquisite wine tasting experience. Our sommelier will guide you through a selection of fine wines from around the world, paired with delectable appetizers.",
    restaurantName: "Italian Delight",
    restaurantId: "1",
    image: "/placeholder.svg?height=400&width=800",
    location: "123 Gourmet Street, Foodville, FC 12345"
  };
}

export default function EventPage() {
  const params = useParams()
  const id = params?.id as string
  const [event, setEvent] = useState<Event | null>(null)

  useEffect(() => {
    if (id) {
      getEvent(id).then(setEvent)
    }
  }, [id])

  if (!event) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <Image
            src={event.image}
            alt={event.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardTitle className="text-3xl">{event.name}</CardTitle>
          <CardDescription>Hosted by: {event.restaurantName}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>{event.location}</span>
          </div>
          <p className="text-lg">{event.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/restaurants/${event.restaurantId}`}>
            <Button variant="outline">View Restaurant</Button>
          </Link>
          <Button>RSVP for Event</Button>
        </CardFooter>
      </Card>
    </div>
  )
}