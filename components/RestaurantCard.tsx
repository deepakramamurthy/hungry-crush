import Image from 'next/image'
import Link from 'next/link'
import { Restaurant } from '@/lib/types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={restaurant.image || '/placeholder.svg'}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        {restaurant.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
        <p className="text-muted-foreground mb-2">{restaurant.cuisine}</p>
        <p className="text-sm mb-2">{restaurant.address}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{restaurant.priceRange}</span>
          <span className="text-sm font-medium">Rating: {restaurant.rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/restaurants/${restaurant.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}