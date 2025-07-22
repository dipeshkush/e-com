import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux.js';
import { setSearchQuery } from '../store/slices/filtersSlice';
import { useEffect, useState } from 'react';

const Header = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items);
    const searchQuery = useAppSelector(state => state.filters.searchQuery);

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
            if (window.scrollY > lastScrollY) {
                setShowHeader(false); 
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSearchChange = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transform transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container flex h-24 items-center justify-between px-4">

                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/logo.png"
                        alt="EcoMart Logo"
                        className="h-24 w-24 object-contain"
                    />
                </Link>

                <div className="flex items-center space-x-4 flex-1 max-w-md mx-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-10 py-3 w-full bg-background/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/cart">
                        <button
                            className={`relative border border-gray-300 rounded-md px-5 py-3 flex items-center text-md bg-blue-200 hover:bg-gray-100 hover:shadow-lg transform transition duration-300 ${animateCart ? 'scale-110' : 'scale-100'
                                }`}
                        >
                            <ShoppingCart className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center animate-bounce">
                                    {cartItemCount}
                                </span>
                            )}
                            <span className="ml-2 hidden text-md sm:inline">Cart</span>
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
