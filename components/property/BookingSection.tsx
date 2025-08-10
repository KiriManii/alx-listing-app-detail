// components/property/BookingSection.tsx

import React, { useState, useEffect } from 'react';

/**
 * BookingSection Component
 *
 * This component displays booking-related information for a property.
 * It allows users to select check-in and check-out dates, calculates the total cost,
 * and provides a "Reserve now" button.
 *
 * Props:
 * - price: The nightly price of the property.
 */
const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [numberOfNights, setNumberOfNights] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  // Calculate number of nights and total payment whenever dates change
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);

      // Ensure check-out is after check-in
      if (end <= start) {
        setNumberOfNights(0);
        setTotalPayment(0);
        return;
      }

      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      setNumberOfNights(diffDays);
      setTotalPayment(diffDays * price);
    } else {
      setNumberOfNights(0);
      setTotalPayment(0);
    }
  }, [checkInDate, checkOutDate, price]);

  // Handle reserve button click (for future implementation)
  const handleReserve = () => {
    if (numberOfNights > 0) {
      // In a real application, you would integrate with a booking API here.
      // For now, we'll just log the reservation details.
      console.log(`Reserved ${numberOfNights} nights for $${totalPayment}`);
      alert(`Successfully reserved for ${numberOfNights} nights! Total: $${totalPayment}`);
    } else {
      alert("Please select valid check-in and check-out dates.");
    }
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">${price}<span className="text-gray-600 font-normal">/night</span></h3>

      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <input
            type="date"
            id="check-in"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
          />
        </div>
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <input
            type="date"
            id="check-out"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate || new Date().toISOString().split('T')[0]} // Check-out must be after check-in
          />
        </div>
      </div>

      {/* Total payment */}
      {numberOfNights > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4 flex justify-between items-center">
          <p className="text-lg text-gray-700">
            {price} x {numberOfNights} nights
          </p>
          <p className="text-xl font-bold text-gray-900">
            Total: <strong>${totalPayment}</strong>
          </p>
        </div>
      )}

      {/* Reserve button */}
      <button
        onClick={handleReserve}
        className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={numberOfNights === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
