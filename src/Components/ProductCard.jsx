import React from 'react';

export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300">
      <img src={image} alt={name} className="h-32 w-full object-contain mb-4" />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-teal-600 font-bold mb-2">₹{price}</p>
      <button
        onClick={onAddToCart}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded mt-2"
      >
        Buy Now
      </button>
    </div>
  );
}
