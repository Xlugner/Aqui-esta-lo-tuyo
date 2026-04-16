import { useState, useEffect } from 'react';
import { cartItems, isCartOpen } from './CartStore';
import { getStoreConfig } from '../../lib/supabase';

interface FloatingButtonsProps {
  onOpenCart?: () => void;
}

/**
 * COMPONENTE: FloatingButtons
 * 
 * Botones flotantes en la esquina inferior derecha:
 * - WhatsApp (verde)
 * - Carrito (azul) - solo en móvil
 */
export const FloatingButtons = ({ onOpenCart }: FloatingButtonsProps) => {
  const [storeConfig, setStoreConfig] = useState<any>(null);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Cargar configuración de la tienda
    getStoreConfig().then(config => setStoreConfig(config));
  }, []);

  const whatsappNumber = storeConfig?.whatsapp_number || import.meta.env.PUBLIC_WHATSAPP_NUMBER;

  useEffect(() => {
    // Suscribirse a cambios del carrito
    const unsubscribe = cartItems.subscribe((items) => {
      // Sumar las cantidades de todos los items
      const totalQuantity = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(totalQuantity);
    });

    return unsubscribe;
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Quisiera más información sobre sus productos.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      
      {/* Botón WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono simple de WhatsApp - teléfono con auricular */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.3a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </button>

      {/* Botón Carrito (solo móvil) */}
      <button
        onClick={() => isCartOpen.set(true)}
        className="w-14 h-14 bg-blue-950 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 relative"
        aria-label="Abrir carrito"
      >
        <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        
        {/* Badge con cantidad */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {totalItems > 9 ? '9+' : totalItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
