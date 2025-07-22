import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux.js';
import { setSearchQuery } from '../store/slices/filtersSlice';
import { useEffect, useState } from 'react';

const Header = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const searchQuery = useAppSelector((state) => state.filters.searchQuery);

  const [animateCart, setAnimateCart] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (cartItemCount > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header
  className={`sticky top-0 z-50 w-full border-b bg-white backdrop-blur transition-transform duration-300 ${
    showHeader ? 'translate-y-0' : '-translate-y-full'
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 gap-4 overflow-x-auto whitespace-nowrap">

    {/* Logo */}
    <Link to="/" className="flex-shrink-0">
      <img
        src="/logo.png"
        alt="EcoMart Logo"
        className="h-20 w-20 md:h-16 md:w-16 object-contain"
      />
    </Link>

    {/* Search Bar */}
    <div className="relative flex-1 max-w-[500px] mx-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Cart Button */}
    <Link to="/cart" className="flex-shrink-0">
      <button
        className={`relative border border-gray-300 rounded-md px-4 py-2 md:px-5 md:py-3 flex items-center text-sm md:text-base bg-blue-200 hover:bg-blue-300 transition duration-300 ${
          animateCart ? 'scale-110' : 'scale-100'
        }`}
      >
        <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 md:h-6 md:w-6 rounded-full bg-red-500 text-white text-xs md:text-sm flex items-center justify-center animate-bounce">
            {cartItemCount}
          </span>
        )}
        <span className="ml-2 hidden sm:inline">Cart</span>
      </button>
    </Link>
  </div>
</header>
  );
};

export default Header;
