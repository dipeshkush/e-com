import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductCard = ({ product, onViewDetails }) => {
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
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition duration-300"
          loading="lazy"
        />

        {!product.inStock && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            Out of Stock
          </span>
        )}

        <button
          onClick={() => onViewDetails(product)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium"
        >
          <Eye className="mr-2" size={18} />
          Quick View
        </button>

      </div>

      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>

        <div className="flex items-center">{renderStars(product.rating)}</div>

        <div className="flex justify-between items-center pt-2">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center text-sm bg-blue-500 text-white px-3 py-1.5 rounded-md transition duration-300 ${!product.inStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
          >
            <ShoppingCart size={14} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
