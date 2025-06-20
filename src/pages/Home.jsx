import { useContext } from 'react';
import ProductCard from '../Components/ProductCard';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="min-h-screen pt-20 pb-16 bg-teal-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl font-bold text-teal-700 mb-2">Welcome to Bajiya Medical</h2>
        <p className="mb-6 text-gray-600">
          Your one-stop online pharmacy with trusted medicines and healthcare products.
        </p>

        {/* Products */}
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Popular Medicines</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={addToCart} />
          ))}
        </div>

        {/* Customer Reviews */}
        <h3 className="text-xl font-semibold text-teal-600 mb-4">Customer Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow border-l-4 border-teal-600">
            <p className="italic text-gray-700">"Best medical store in town! Got my order in 1 day."</p>
            <p className="mt-2 text-sm font-semibold text-right text-teal-800">- Madan Singh</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-teal-600">
            <p className="italic text-gray-700">"Affordable prices and quality medicines."</p>
            <p className="mt-2 text-sm font-semibold text-right text-teal-800">- Sonu Choudhary</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-teal-600">
            <p className="italic text-gray-700">"Customer support is very responsive."</p>
            <p className="mt-2 text-sm font-semibold text-right text-teal-800">- Ajay Singh</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-teal-600">
            <p className="italic text-gray-700">"Website is easy to use, and checkout is fast."</p>
            <p className="mt-2 text-sm font-semibold text-right text-teal-800">- Manu Choudhary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
