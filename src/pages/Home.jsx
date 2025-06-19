import { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const testimonials = [
  { name: 'Ankit', feedback: 'Fast delivery and genuine medicines. Very satisfied!' },
  { name: 'Yatesh Choudhary', feedback: 'Affordable and easy to order. Highly recommended!' },
  { name: 'Ajay Singh', feedback: 'Customer service is excellent. Will buy again!' }
];

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { name: 'Paracetamol', price: 30, image: '/medicines/paracetamol.jpg' },
    { name: 'Crocin', price: 45, image: '/medicines/crocin.jpg' },
    { name: 'Dolo 650', price: 55, image: '/medicines/dolo.jpg' },
    { name: 'Cough Syrup', price: 110, image: '/medicines/cough_syrup.jpg' },
    { name: 'Aspirin', price: 70, image: '/medicines/aspirin.jpg' },
    { name: 'Amlodipine', price: 65, image: '/medicines/amlodipine.jpg' },
    { name: 'Kofeez', price: 150, image: '/medicines/kofeez.jpg' },
    { name: 'Azithromycin', price: 60, image: '/medicines/azithromycin.jpg' },
  ];

  return (
    <section class="min-h-screen pt-20 bg-teal-100 text-gray-800">
      {/* Content container */}
      <div class="bg-white bg-opacity-95 backdrop-blur-sm p-6 rounded-md shadow-lg mx-4 md:mx-8 lg:mx-16">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-teal-700">Welcome to Bajiya Medical</h2>
        </div>

        <p class="text-gray-600 mb-6">
          Your one-stop online pharmacy with trusted medicines and health care products.
        </p>

        {/* Products Grid */}
        <h3 class="text-xl font-semibold mb-3 text-teal-600">Popular Medicines</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} onAddToCart={() => addToCart(product)} />
          ))}
        </div>

        {/* Testimonials */}
        <h3 class="text-xl font-semibold mb-3 text-teal-600">What Our Customers Say</h3>
        <div class="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} class="bg-teal-50 p-4 rounded shadow">
              <p class="italic text-gray-700">"{t.feedback}"</p>
              <p class="mt-2 text-sm font-semibold text-right text-teal-800">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
