import React, { useState } from 'react';
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/ui/Pill';
import PropertyCard from '@/components/ui/PropertyCard';

const FILTERS = [
  'Luxury Villa',
  'Pool',
  'Free Parking',
  'Self Checkin',
  'Beachfront',
  'Mountain View',
];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter(p => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      <section
        className="h-64 bg-cover bg-center rounded-lg mb-8 flex items-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(label => (
            <Pill
              key={label}
              label={label}
              selected={activeFilter === label}
              onClick={() => setActiveFilter(activeFilter === label ? null : label)}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(property => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
