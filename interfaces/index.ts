// interfaces/index.ts

export interface Address {
  street: string;
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string; // URL to the reviewer's avatar image
  rating: number; // Star rating (e.g., 1-5)
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string; // URL to the main property image
  description: string;
  category: string[]; // List of amenities/services
  price: number; // Price per night
  reviews: Review[]; // Array of review objects
}
