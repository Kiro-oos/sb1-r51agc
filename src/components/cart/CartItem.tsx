import React from 'react';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h3 className="font-semibold">{item.product.name}</h3>
          <p className="text-gray-600">${item.product.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value))}
          className="w-16 px-2 py-1 border rounded"
        />
        <button
          onClick={() => onRemove(item.product.id)}
          className="ml-4 text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>
  );
};