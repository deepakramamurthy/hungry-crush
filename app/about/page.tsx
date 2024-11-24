import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Hungry Crush</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Hungry Crush is your ultimate destination for discovering and booking the best restaurants in your area. 
            We're passionate about connecting food lovers with exceptional dining experiences.
          </p>
          <p className="text-lg mb-4">
            Whether you're looking for a romantic dinner spot, a family-friendly restaurant, or the hottest new eatery in town, 
            Hungry Crush has got you covered. Our platform makes it easy to explore, book, and enjoy amazing culinary adventures.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/about-image.jpg"
            alt="People enjoying a meal at a restaurant"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-8">
        At Hungry Crush, our mission is to revolutionize the way people discover and experience restaurants. 
        We strive to create a seamless connection between food enthusiasts and exceptional dining establishments, 
        fostering a community that celebrates culinary diversity and innovation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Restaurant Discovery</CardTitle>
          </CardHeader>
          <CardContent>
            Explore a curated selection of restaurants, from hidden gems to popular hotspots, all in one place.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Easy Booking</CardTitle>
          </CardHeader>
          <CardContent>
            Make reservations with just a few clicks, saving you time and ensuring your table is ready when you arrive.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Food Events</CardTitle>
          </CardHeader>
          <CardContent>
            Discover and participate in exciting food events, tastings, and culinary experiences in your area.
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
      <p className="text-lg mb-4">
        Hungry Crush is more than just a booking platform – it's a community of food lovers. Join us to:
      </p>
      <ul className="list-disc list-inside text-lg mb-8 pl-4">
        <li>Share your dining experiences and read reviews from fellow food enthusiasts</li>
        <li>Stay updated on the latest restaurant openings and food trends</li>
        <li>Connect with other foodies and expand your culinary network</li>
        <li>Participate in exclusive events and special offers from our partner restaurants</li>
      </ul>

      <p className="text-lg font-semibold">
        Ready to embark on your next culinary adventure? Start exploring with Hungry Crush today!
      </p>
    </div>
  )
}