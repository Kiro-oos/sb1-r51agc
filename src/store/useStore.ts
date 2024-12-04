import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface Store {
  cart: CartItem[];
  loyaltyPoints: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addLoyaltyPoints: (points: number) => void;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  loyaltyPoints: 0,
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter(item => item.product.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ),
    })),
  addLoyaltyPoints: (points) =>
    set((state) => ({
      loyaltyPoints: state.loyaltyPoints + points,
    })),
}));