export interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface Event {
  _id: string;
  name: string;
  date: string;
  description: string;
  restaurantName?: string;
  image: string;
  featured: boolean;
}