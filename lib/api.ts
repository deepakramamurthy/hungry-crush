import { Restaurant, Event } from './types'

export async function getAllRestaurants(): Promise<Restaurant[]> {
  // Replace this with your actual API call
  return [
    { _id: '1', name: "Italian Delight", cuisine: "Italian", description: "Authentic Italian cuisine in a cozy atmosphere.", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '2', name: "Sushi Haven", cuisine: "Japanese", description: "Fresh sushi and traditional Japanese dishes.", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '3', name: "Spice Route", cuisine: "Indian", description: "A journey through the flavors of India.", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '4', name: "Burger Bliss", cuisine: "American", description: "Juicy burgers and crispy fries.", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '5', name: "Taco Fiesta", cuisine: "Mexican", description: "Authentic Mexican street food.", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '6', name: "Pasta Paradise", cuisine: "Italian", description: "Homemade pasta and traditional Italian recipes.", image: "/placeholder.svg?height=300&width=400", featured: false },
    { _id: '7', name: "Sushi Sensation", cuisine: "Japanese", description: "Modern Japanese cuisine with a twist.", image: "/placeholder.svg?height=300&width=400", featured: false },
  ];
}

export async function getAllEvents(): Promise<Event[]> {
  // Replace this with your actual API call
  return [
    { _id: '1', name: "Wine Tasting Evening", date: "2024-12-15", description: "Explore a variety of wines with our sommelier.", restaurantName: "Italian Delight", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '2', name: "Sushi Making Class", date: "2024-12-20", description: "Learn to make sushi from our expert chefs.", restaurantName: "Sushi Haven", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '3', name: "Spicy Food Challenge", date: "2024-12-25", description: "Test your spice tolerance with our special menu.", restaurantName: "Spice Route", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '4', name: "Burger Eating Contest", date: "2024-12-30", description: "Who can eat the most burgers?", restaurantName: "Burger Bliss", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '5', name: "Taco Tuesday Fiesta", date: "2025-01-05", description: "All-you-can-eat tacos every Tuesday!", restaurantName: "Taco Fiesta", image: "/placeholder.svg?height=300&width=400", featured: true },
    { _id: '6', name: "Pasta Workshop", date: "2025-01-10", description: "Learn to make authentic Italian pasta from scratch.", restaurantName: "Pasta Paradise", image: "/placeholder.svg?height=300&width=400", featured: false },
    { _id: '7', name: "Sushi and Sake Pairing", date: "2025-01-15", description: "Discover the perfect sake for your favorite sushi.", restaurantName: "Sushi Sensation", image: "/placeholder.svg?height=300&width=400", featured: false },
  ];
}

export async function getFeaturedRestaurants(): Promise<Restaurant[]> {
  const allRestaurants = await getAllRestaurants();
  return allRestaurants.filter(restaurant => restaurant.featured);
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.featured);
}

export async function searchRestaurantsAndEvents(query: string): Promise<{ restaurants: Restaurant[], events: Event[] }> {
  const allRestaurants = await getAllRestaurants();
  const allEvents = await getAllEvents();

  const filteredRestaurants = allRestaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(query.toLowerCase()) ||
    restaurant.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredEvents = allEvents.filter(event =>
    event.name.toLowerCase().includes(query.toLowerCase()) ||
    event.description.toLowerCase().includes(query.toLowerCase()) ||
    event.restaurantName.toLowerCase().includes(query.toLowerCase())
  );

  return {
    restaurants: filteredRestaurants,
    events: filteredEvents
  };
}