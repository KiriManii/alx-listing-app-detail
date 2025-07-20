import React from 'react';
import { PropertyProps } from '@/constants';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-indigo-600 font-bold">${property.price}</span>
          <span className="ml-auto text-sm">⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};
