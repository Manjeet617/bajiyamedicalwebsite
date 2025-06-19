import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-purple-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand + Toggle */}
        <Link to="/" className="text-xl font-bold">BajiyaMedical</Link>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={handleToggle}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/cart" className="hover:underline">Cart ({cart.length})</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-700 px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-center">
            <li><Link to="/" onClick={closeMenu} className="block hover:underline">Home</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block hover:underline">About</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block hover:underline">Contact</Link></li>
            <li><Link to="/cart" onClick={closeMenu} className="block hover:underline">Cart ({cart.length})</Link></li>
            <li><Link to="/login" onClick={closeMenu} className="block hover:underline">Login</Link></li>
            <li><Link to="/signup" onClick={closeMenu} className="block hover:underline">Signup</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
