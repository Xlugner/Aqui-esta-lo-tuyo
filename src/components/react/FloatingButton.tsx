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
        {/* Icono de WhatsApp desde Font Awesome */}
        <svg className="w-7 h-7" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.9C388 89.5 395.7 80.2 400 70c5.6-10.4 3.5-22.6-6.1-31.1-10-8.8-24.3-10.8-34.3-4.7l-68.2 28.2c-11.2 4.6-22.6 6.7-34.1 6.1-11.5-.5-22.3-4.4-30.9-11.1C224 64.7 206.9 59 190 59c-16.9 0-33.9 5.7-47.9 16.4-14 10.6-22.9 25.2-26.8 41-3.9 15.8-.9 32.6 8.4 46.6l28.2 68.2c5.3 12.9 16.7 22.6 30.2 25.8 13.5 3.2 28.1.1 38.8-8.4 10.6-8.8 17.2-21.3 18.7-35.2 1.5-13.9-2.4-28.1-11.1-38.4l-30.9-30.9c-2.9-2.9-6.7-4.4-10.6-4.4s-7.7 1.5-10.6 4.4c-5.8 5.8-5.8 15.2 0 21l42.2 42.2c2.9 2.9 4.4 6.7 4.4 10.6s-1.5 7.7-4.4 10.6c-5.8 5.8-15.2 5.8-21 0L195 261.9c-2.9-2.9-6.7-4.4-10.6-4.4s-7.7 1.5-10.6 4.4c-5.8 5.8-5.8 15.2 0 21l42.2 42.2c2.9 2.9 4.4 6.7 4.4 10.6s-1.5 7.7-4.4 10.6c-5.8 5.8-15.2 5.8-21 0l-30.9-30.9c-10.6-10.6-11.3-27.6-.4-39.4 10.9-11.8 28.6-13.8 42.2-3.2l13.6 10.3c5.9 4.5 14.2 5.6 21.4 3 7.2-2.6 12.8-8.3 15.1-15.5l15.5-68.2c2.3-10.7-.6-21.8-7.9-30.5zm-217.9 22.2c-3.5-17.8 3.6-36.2 17.8-47.3 14.2-11.1 33.2-14.3 50.3-8.5l68.2 23c2.6.9 5.1 2.2 7.4 3.9 2.3 1.7 4.2 3.8 5.6 6.1l15.5 68.2c3.3 14.6-1.4 29.8-12.4 39.8-11 10-26.1 14.1-40.1 10.9l-68.2-23c-2.6-.9-5.1-2.2-7.4-3.9-2.3-1.7-4.2-3.8-5.6-6.1l-15.5-68.2c-1.4-6.2-1.4-12.6.1-18.9z"/>
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
