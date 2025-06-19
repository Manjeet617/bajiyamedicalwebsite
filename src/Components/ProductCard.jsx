import React from 'react';

export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div class="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300">
      <img src={image} alt={name} class="h-32 w-full object-contain mb-4" />
      <h4 class="text-lg font-semibold text-gray-800">{name}</h4>
      <p class="text-teal-600 font-bold mb-2">₹{price}</p>
      <button
        onClick={onAddToCart}
        class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded mt-2"
      >
        Buy Now
      </button>
    </div>
  );
}
