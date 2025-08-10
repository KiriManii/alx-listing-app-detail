// constants/index.ts

// Define a sample property listing array
export const PROPERTYLISTINGSAMPLE = [
  {
    name: "Luxury Beachfront Villa",
    rating: 4.8,
    address: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    image: "https://placehold.co/1200x800/22d3ee/FFFFFF?text=Beachfront+Villa", // Placeholder image
    description: "Experience unparalleled luxury at this stunning beachfront villa. Perfect for a relaxing getaway.",
    category: ["Private Pool", "Beach Access", "Gym", "Wi-Fi", "Air Conditioning", "Ocean View", "Parking"],
    price: 500, // Example price per night
    reviews: [
      {
        name: "Alice Johnson",
        avatar: "https://placehold.co/64x64/22d3ee/FFFFFF?text=AJ", // Placeholder avatar
        rating: 5,
        comment: "Absolutely beautiful place! Had an amazing time with family.",
      },
      {
        name: "Bob Williams",
        avatar: "https://placehold.co/64x64/818cf8/FFFFFF?text=BW", // Placeholder avatar
        rating: 4,
        comment: "Great location and amenities. Would definitely recommend.",
      },
    ],
  },
  {
    name: "Cozy Mountain Cabin",
    rating: 4.5,
    address: {
      street: "456 Peak Road",
      city: "Aspen",
      country: "USA",
    },
    image: "https://placehold.co/1200x800/8b5cf6/FFFFFF?text=Mountain+Cabin", // Placeholder image
    description: "A charming cabin nestled in the mountains, offering serene views and hiking trails.",
    category: ["Fireplace", "Mountain View", "Pet Friendly", "Kitchen", "Hot Tub"],
    price: 250,
    reviews: [
      {
        name: "Charlie Brown",
        avatar: "https://placehold.co/64x64/0ea5e9/FFFFFF?text=CB", // Placeholder avatar
        rating: 5,
        comment: "Perfect cozy retreat! Loved the fireplace.",
      },
      {
        name: "Diana Prince",
        avatar: "https://placehold.co/64x64/f472b6/FFFFFF?text=DP", // Placeholder avatar
        rating: 4,
        comment: "Beautiful surroundings, very peaceful.",
      },
    ],
  },
  // Add more properties as needed for testing
];
