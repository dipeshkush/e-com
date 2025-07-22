import { Star, ShoppingCart, X } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/slices/cartSlice';

export default function ProductModal({ product, isOpen, onClose }) {
  const dispatch = useAppDispatch();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!product.inStock) return;
    dispatch(addToCart(product));
    onClose();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4">{product.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

          <div>
            <p className="text-sm mb-2">{product.category}</p>
            <div className="flex items-center mb-2">{renderStars(product.rating)}</div>
            <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>

            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${
                  !product.inStock && 'opacity-50 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="inline mr-1" /> Add to Cart
              </button>
              <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
