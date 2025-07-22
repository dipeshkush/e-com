import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    alert(`${item.name} has been removed from your cart.`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 border rounded-lg p-4 w-full shadow-sm">

      {/* Image */}
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <h3 className="font-semibold text-base sm:text-lg truncate">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-1">
          <span className="text-lg font-bold text-green-600">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          className="border rounded p-1 text-gray-600 disabled:opacity-50"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="w-8 text-center font-medium">{item.quantity}</span>

        <button
          className="border rounded p-1 text-gray-600"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        className="text-red-500 hover:text-red-600 sm:self-start"
        onClick={handleRemoveItem}
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;
