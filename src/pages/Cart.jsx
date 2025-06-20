import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    clearCart();
    setShowModal(false);
  };

  return (
    <div className="p-4 pt-20 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">Your Cart</h2>

      {orderConfirmed && (
        <div className="bg-green-100 text-green-800 border border-green-300 p-4 rounded mb-4">
          ✅ Order Confirmed! Thank you for shopping with us.
        </div>
      )}

      {cart.length === 0 && !orderConfirmed ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border p-3 rounded bg-white shadow-sm">
              <p>{item.name} - ₹{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline text-sm"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-semibold text-purple-800">Total: ₹{total}</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 bg-purple-800 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
            >
              🛒 Confirm Order
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-lg font-bold text-purple-800 mb-2">Confirm Your Order</h3>
            <p className="text-gray-700 mb-4">Total Amount: ₹{total}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmOrder}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
