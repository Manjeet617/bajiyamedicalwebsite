import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div class="p-4 pt-20">
      <h2 class="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div class="space-y-2">
          {cart.map((item, i) => (
            <div key={i} class="border p-2 rounded">
              <p>{item.name} - ₹{item.price}</p>
            </div>
          ))}
          <p class="mt-4 font-bold">Total: ₹{total}</p>
        </div>
      )}
    </div>
  );
}
