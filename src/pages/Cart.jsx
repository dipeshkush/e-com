import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { clearCart } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const cartTotal = useAppSelector(state => state.cart.total);

  console.log("Cart Items:", cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
    alert("Cart cleared!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12 text-center">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
          <ShoppingBag className="h-20 w-20 mx-auto text-blue-400 mb-4 animate-bounce" />

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow transition duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>

    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <p>Subtotal: ${cartTotal.toFixed(2)}</p>
        <p>Tax: ${(cartTotal * 0.08).toFixed(2)}</p>
        <p>Total: ${(cartTotal * 1.08).toFixed(2)}</p>

        <button
          onClick={() => alert('Proceed to checkout')}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          <CreditCard className="h-5 w-5 mr-2 inline" />
          Proceed to Checkout
        </button>

        <button
          onClick={handleClearCart}
          className="border text-red-500 border-red-500 py-2 px-4 rounded mt-4 ml-4"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
