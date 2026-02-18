// Tipos para el carrito de compras

export interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: 'CUP' | 'USD';
  quantity: number;
  image: string;
  slug: string;
}

export interface CartTotals {
  CUP: number;
  USD: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalsByCurrency: CartTotals;
}