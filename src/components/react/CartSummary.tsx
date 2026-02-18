import { useEffect, useState } from 'react';
import { cartItems, totalsByCurrency } from './CartStore';

export const CartSummary = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = cartItems.subscribe((cartData) => {
      setItems(Object.values(cartData));
    });
    return unsubscribe;
  }, []);

  const totals = totalsByCurrency.get();
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-neutral-800 mb-4">Resumen del Pedido</h3>
        <p className="text-neutral-500">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-neutral-800 mb-4">Resumen del Pedido</h3>
      
      {/* Lista de productos */}
      <div className="space-y-3 mb-6">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b">
            <div>
              <span className="font-medium text-neutral-800">{item.name}</span>
              <span className="text-sm text-neutral-600 ml-2">x{item.quantity}</span>
            </div>
            <span className="font-bold text-neutral-900">
              $ {(item.price * item.quantity).toLocaleString()} {item.currency}
            </span>
          </div>
        ))}
      </div>

      {/* Totales por moneda */}
      <div className="space-y-2 mb-4">
        {(totals.CUP > 0 || totals.USD > 0) && (
          <>
            <div className="text-sm text-neutral-600 font-medium">Resumen por moneda:</div>
            {totals.CUP > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-neutral-700">Total CUP:</span>
                <span className="text-lg font-bold text-neutral-900">
                  $ {totals.CUP.toLocaleString()} CUP
                </span>
              </div>
            )}
            {totals.USD > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-neutral-700">Total USD:</span>
                <span className="text-lg font-bold text-neutral-900">
                  $ {totals.USD.toLocaleString()} USD
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Total general */}
     
    </div>
  );
};
