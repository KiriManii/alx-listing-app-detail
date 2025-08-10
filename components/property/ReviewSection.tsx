// components/property/ReviewSection.tsx

import React from 'react';
import { Review } from "@/interfaces/index"; // Import the Review interface

/**
 * ReviewSection Component
 *
 * This component displays a list of reviews for a property.
 * It iterates over an array of 'reviews' and renders each review with
 * the reviewer's name, avatar, star rating, and their comment.
 *
 * Props:
 * - reviews: An array of Review objects.
 */
const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  // Function to render star icons based on a rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-500">
        {Array(fullStars).fill(null).map((_, i) => (
          <span key={`full-${i}`} className="text-xl">&#9733;</span> // Full star
        ))}
        {hasHalfStar && <span className="text-xl">&#9733;&#xFE0E;</span>} {/* This is a simplified representation of a half-star or you can use a font icon */}
        {Array(emptyStars).fill(null).map((_, i) => (
          <span key={`empty-${i}`} className="text-xl text-gray-300">&#9733;</span> // Empty star
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12 p-6 bg-white shadow-xl rounded-lg border border-gray-100">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">
        Reviews ({reviews.length})
      </h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to review this property!</p>
      ) : (
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center mb-3">
                {/* Reviewer Avatar */}
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-indigo-200"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/64x64/cbd5e1/475569?text=${review.name.substring(0,2)}`;
                  }}
                />
                <div>
                  {/* Reviewer Name */}
                  <p className="font-semibold text-lg text-gray-900">{review.name}</p>
                  {/* Rating Stars */}
                  {renderStars(review.rating)}
                </div>
              </div>
              {/* Review Comment */}
              <p className="text-gray-700 leading-relaxed text-base">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
