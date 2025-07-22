import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 pt-12 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">E-SHOP</h2>
          <p className="text-sm leading-relaxed mb-4">
            Your one-stop eco-friendly store for quality products across electronics, fashion, home, and more.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:underline hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:underline hover:text-white transition">Products</a></li>
            <li><a href="/cart" className="hover:underline hover:text-white transition">Cart</a></li>
            <li><a href="/about" className="hover:underline hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:underline hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for latest offers & updates:</p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 text-sm text-white placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm text-white rounded-r-md transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-white">E-SHOP</span>. All rights reserved.
      </div>
    </footer>
  );
}
