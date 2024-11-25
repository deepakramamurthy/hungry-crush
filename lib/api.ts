import { prisma } from './prisma'
import type { Restaurant, Event, User, Booking, Review } from './types'
import { Prisma } from '@prisma/client'

// Restaurant functions
export async function getAllRestaurants(): Promise<Restaurant[]> {
  const restaurants = await prisma.restaurant.findMany()
  return restaurants.map(formatRestaurant)
}

export async function getFeaturedRestaurants(): Promise<Restaurant[]> {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      featured: true
    }
  })
  return restaurants.map(formatRestaurant)
}

export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  const restaurant = await prisma.restaurant.findUnique({
    where: { id }
  })
  return restaurant ? formatRestaurant(restaurant) : null
}

export async function createRestaurant(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {
  const restaurant = await prisma.restaurant.create({
    data
  })
  return formatRestaurant(restaurant)
}

export async function updateRestaurant(id: string, data: Prisma.RestaurantUpdateInput): Promise<Restaurant> {
  const restaurant = await prisma.restaurant.update({
    where: { id },
    data
  })
  return formatRestaurant(restaurant)
}

export async function deleteRestaurant(id: string): Promise<Restaurant> {
  const restaurant = await prisma.restaurant.delete({
    where: { id }
  })
  return formatRestaurant(restaurant)
}

// Event functions
export async function getAllEvents(): Promise<Event[]> {
  const events = await prisma.event.findMany({
    include: { restaurant: true }
  })
  return events.map(formatEvent)
}

export async function getFeaturedEvents(): Promise<Event[]> {
  const events = await prisma.event.findMany({
    where: {
      featured: true
    },
    include: { restaurant: true }
  })
  return events.map(formatEvent)
}

export async function getEventById(id: string): Promise<Event | null> {
  const event = await prisma.event.findUnique({
    where: { id },
    include: { restaurant: true }
  })
  return event ? formatEvent(event) : null
}

export async function createEvent(data: Prisma.EventCreateInput): Promise<Event> {
  const event = await prisma.event.create({
    data,
    include: { restaurant: true }
  })
  return formatEvent(event)
}

export async function updateEvent(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
  const event = await prisma.event.update({
    where: { id },
    data,
    include: { restaurant: true }
  })
  return formatEvent(event)
}

export async function deleteEvent(id: string): Promise<Event> {
  const event = await prisma.event.delete({
    where: { id },
    include: { restaurant: true }
  })
  return formatEvent(event)
}

// User functions
export async function getUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user ? formatUser(user) : null
}

export async function createUser(data: Prisma.UserCreateInput): Promise<User> {
  const user = await prisma.user.create({
    data
  })
  return formatUser(user)
}

export async function updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
  const user = await prisma.user.update({
    where: { id },
    data
  })
  return formatUser(user)
}

export async function deleteUser(id: string): Promise<User> {
  const user = await prisma.user.delete({
    where: { id }
  })
  return formatUser(user)
}

// Booking functions
export async function createBooking(data: Prisma.BookingCreateInput): Promise<Booking> {
  const booking = await prisma.booking.create({
    data,
    include: { user: true, restaurant: true }
  })
  return formatBooking(booking)
}

export async function getBookingById(id: string): Promise<Booking | null> {
  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { user: true, restaurant: true }
  })
  return booking ? formatBooking(booking) : null
}

export async function updateBooking(id: string, data: Prisma.BookingUpdateInput): Promise<Booking> {
  const booking = await prisma.booking.update({
    where: { id },
    data,
    include: { user: true, restaurant: true }
  })
  return formatBooking(booking)
}

export async function deleteBooking(id: string): Promise<Booking> {
  const booking = await prisma.booking.delete({
    where: { id },
    include: { user: true, restaurant: true }
  })
  return formatBooking(booking)
}

// Review functions
export async function createReview(data: Prisma.ReviewCreateInput): Promise<Review> {
  const review = await prisma.review.create({
    data,
    include: { user: true, restaurant: true }
  })
  return formatReview(review)
}

export async function getReviewById(id: string): Promise<Review | null> {
  const review = await prisma.review.findUnique({
    where: { id },
    include: { user: true, restaurant: true }
  })
  return review ? formatReview(review) : null
}

export async function updateReview(id: string, data: Prisma.ReviewUpdateInput): Promise<Review> {
  const review = await prisma.review.update({
    where: { id },
    data,
    include: { user: true, restaurant: true }
  })
  return formatReview(review)
}

export async function deleteReview(id: string): Promise<Review> {
  const review = await prisma.review.delete({
    where: { id },
    include: { user: true, restaurant: true }
  })
  return formatReview(review)
}

// Search function
export async function searchRestaurantsAndEvents(query: string): Promise<{ restaurants: Restaurant[], events: Event[] }> {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { cuisine: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } }
      ]
    }
  })

  const events = await prisma.event.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { restaurant: { name: { contains: query, mode: 'insensitive' } } }
      ]
    },
    include: { restaurant: true }
  })

  return { 
    restaurants: restaurants.map(formatRestaurant),
    events: events.map(formatEvent)
  }
}

// Helper functions to format data
function formatRestaurant(restaurant: Prisma.RestaurantGetPayload<{}>): Restaurant {
  return {
    id: restaurant.id,
    name: restaurant.name,
    description: restaurant.description,
    image: restaurant.image,
    address: restaurant.address,
    cuisine: restaurant.cuisine,
    priceRange: restaurant.priceRange,
    rating: restaurant.rating,
    featured: restaurant.featured,
    createdAt: restaurant.createdAt.toISOString(),
    updatedAt: restaurant.updatedAt.toISOString()
  }
}

function formatEvent(event: Prisma.EventGetPayload<{ include: { restaurant: true } }>): Event {
  return {
    id: event.id,
    name: event.name,
    description: event.description,
    image: event.image,
    date: event.date.toISOString(),
    featured: event.featured,
    restaurantId: event.restaurantId,
    restaurantName: event.restaurant.name,
    createdAt: event.createdAt.toISOString(),
    updatedAt: event.updatedAt.toISOString()
  }
}

function formatUser(user: Prisma.UserGetPayload<{}>): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerified: user.emailVerified?.toISOString() || null,
    image: user.image,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString()
  }
}

function formatBooking(booking: Prisma.BookingGetPayload<{ include: { user: true, restaurant: true } }>): Booking {
  return {
    id: booking.id,
    userId: booking.userId,
    restaurantId: booking.restaurantId,
    date: booking.date.toISOString(),
    partySize: booking.partySize,
    createdAt: booking.createdAt.toISOString(),
    updatedAt: booking.updatedAt.toISOString(),
    user: formatUser(booking.user),
    restaurant: formatRestaurant(booking.restaurant)
  }
}

function formatReview(review: Prisma.ReviewGetPayload<{ include: { user: true, restaurant: true } }>): Review {
  return {
    id: review.id,
    userId: review.userId,
    restaurantId: review.restaurantId,
    rating: review.rating,
    comment: review.comment,
    createdAt: review.createdAt.toISOString(),
    updatedAt: review.updatedAt.toISOString(),
    user: formatUser(review.user),
    restaurant: formatRestaurant(review.restaurant)
  }
}