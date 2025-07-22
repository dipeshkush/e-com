import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/slices/cartSlice';

export default function ProductCard({ product, onViewDetails }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (!product.inStock) return;
    dispatch(addToCart(product));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white transform hover:scale-105 hover:shadow-lg hover:border-blue-400 transition duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        {!product.inStock && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            Out of Stock
          </span>
        )}
        <button
          className="absolute inset-0 bg-black bg-opacity-20 text-white opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300"
          onClick={() => onViewDetails(product)}
        >
          <Eye className="mr-1" /> Quick View
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>

        <div className="flex items-center mt-2">{renderStars(product.rating)}</div>

        <div className="flex justify-between mt-2">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`text-sm bg-blue-500 text-white px-4 py-2 rounded ${
              !product.inStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            <ShoppingCart size={14} className="inline mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
