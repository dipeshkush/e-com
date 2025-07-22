import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4">EcoMart</h2>
          <p className="text-sm mb-4">
            Your one-stop eco-friendly store for quality products across electronics, fashion, home, and more.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:underline hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:underline hover:text-white">Products</a></li>
            <li><a href="/cart" className="hover:underline hover:text-white">Cart</a></li>
            <li><a href="/about" className="hover:underline hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:underline hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for latest offers & updates:</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l bg-gray-700 text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} EcoMart. All rights reserved.
      </div>
    </footer>
  );
}
