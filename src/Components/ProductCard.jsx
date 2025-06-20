import React, { useState } from 'react';

export default function ProductCard({ name, price, image, onAddToCart }) {
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleBuyNow = () => {
    setIsClicked(true);
    onAddToCart({ name, price, image, quantity });

    // ✅ Show alert for 2 seconds
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300">
      <img src={image} alt={name} className="h-32 w-full object-contain mb-4" />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-teal-600 font-bold mb-2">₹{price}</p>

      {isClicked && (
        <div className="flex justify-center items-center gap-2 mb-2">
          <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
          <span className="text-md font-semibold">{quantity}</span>
          <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
      )}

      <button
        onClick={handleBuyNow}
        className={`px-4 py-2 rounded mt-2 font-medium ${isClicked ? 'bg-green-600 hover:bg-green-700' : 'bg-teal-600 hover:bg-teal-700'} text-white`}
      >
        {isClicked ? 'Added!' : 'Buy Now'}
      </button>
      

      {/* ✅ Alert Box */}
      {showAlert && (
        <div className="mt-2 text-green-600 font-medium text-sm">✔️ Added to Cart</div>
      )}
    </div>
  );
}
