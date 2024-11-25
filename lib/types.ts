export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string | null;
  address: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  image: string | null;
  date: string;
  featured: boolean;
  restaurantId: string;
  restaurantName: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  restaurantId: string;
  date: string;
  partySize: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  restaurant: Restaurant;
}

export interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  user: User;
  restaurant: Restaurant;
}