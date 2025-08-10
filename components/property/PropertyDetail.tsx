// components/property/PropertyDetail.tsx

import React from 'react';
import { PropertyProps } from "@/interfaces/index"; // Import the PropertyProps interface
import BookingSection from './BookingSection'; // Import the BookingSection component
import ReviewSection from './ReviewSection';   // Import the ReviewSection component

/**
 * PropertyDetail Component
 *
 * This component displays the comprehensive details of a single property.
 * It takes a 'property' object as a prop, which conforms to the PropertyProps interface.
 *
 * Responsibilities:
 * - Display property header: name, rating, and location.
 * - Show a prominent main image and a grid for additional images (currently uses a single image).
 * - Display the property's description.
 * - List the amenities and services the property offers.
 * - Integrates the BookingSection and ReviewSection components.
 */
const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 lg:p-8 bg-white shadow-lg rounded-lg my-8">
      {/* Property Header: Name, Rating, Location */}
      <div className="mb-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          {property.name}
        </h1>
        <div className="flex items-center space-x-3 mt-3 text-gray-600">
          {/* Star rating display - simplified for now */}
          <span className="text-yellow-500 text-lg font-semibold flex items-center">
            &#9733; {property.rating} stars {/* Unicode star character */}
          </span>
          <span className="text-xl font-medium">|</span>
          <span className="text-lg">
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid/Gallery */}
      {/* For now, we'll display the single 'image' from the property object prominently.
          In a real application, you'd have an array of images to populate a grid. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-96 object-cover rounded-xl shadow-md"
            // Fallback for broken images
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/e0e0e0/555555?text=Image+Not+Found';
            }}
          />
        </div>
        {/* Placeholder for additional images if property had an array of images */}
        <div className="hidden lg:grid grid-cols-1 gap-4">
          <img src="https://placehold.co/600x400/a78bfa/FFFFFF?text=More+Views" alt="Additional view 1" className="w-full h-48 object-cover rounded-xl shadow-md" />
          <img src="https://placehold.co/600x400/a78bfa/FFFFFF?text=More+Views" alt="Additional view 2" className="w-full h-48 object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* Property Details Section: Description, Amenities, and Booking Section */}
      {/* This uses a responsive grid to place the main content and the booking section side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2">
          {/* Description Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {property.description}
            </p>
          </div>

          {/* Amenities Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What this place offers</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
              {/* Map over the category array to display amenities */}
              {property.category.map((amenity, index) => (
                <li key={index} className="flex items-center bg-gray-100 p-3 rounded-md shadow-sm">
                  {/* You can add actual icons here later using a library like Lucide React or Font Awesome */}
                  <span className="mr-3 text-blue-500">&#x2713;</span> {/* Checkmark icon */}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Section - Positioned on the right for larger screens */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} /> {/* Pass the property price to BookingSection */}
        </div>
      </div>

      {/* Review Section - Placed below the main content and booking section */}
      <div className="mt-12">
        <ReviewSection reviews={property.reviews} /> {/* Pass the property reviews to ReviewSection */}
      </div>
    </div>
  );
};

export default PropertyDetail;
