import React from 'react';
import { useStore } from '../../store/useStore';
import { CartItem } from './CartItem';
import { calculateTotal } from '../../utils/calculateTotal';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const total = calculateTotal(cart);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};