import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    alert(`${item.name} has been removed from your cart.`);
  };

  return (
    <div className="flex items-center space-x-4 border rounded p-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm truncate">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-price">${item.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="border rounded p-1"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="w-8 text-center font-medium">{item.quantity}</span>

        <button
          className="border rounded p-1"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        className="text-red-500 ml-2"
        onClick={handleRemoveItem}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CartItem;
