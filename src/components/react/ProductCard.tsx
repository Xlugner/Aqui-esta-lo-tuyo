import { useState, useEffect } from 'react';
import { addCartItem } from './CartStore';
import { getSupabaseImage } from '../../lib/supabase';
import type { Product } from '../../lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { id, name, price, currency, slug, images, featured } = product;

  // Obtener imagen
  const firstImage = images && images.length > 0 ? images[0] : null;
  const imageUrl = getSupabaseImage(firstImage?.image_url);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!mounted) return;

    const cartItem = {
      id,
      name,
      price,
      currency,
      slug,
      image: imageUrl,
    };

    addCartItem(cartItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!mounted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
        <div className="aspect-square bg-neutral-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-neutral-200 rounded w-3/4" />
          <div className="h-6 bg-neutral-200 rounded w-1/2" />
          <div className="h-10 bg-neutral-200 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <article className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group flex flex-col border border-neutral-100">
      {/* Badge "Más Vendido" */}
      {featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            Más Vendido
          </span>
        </div>
      )}

      {/* Imagen del producto */}
      <a
        href={`/productos/${slug}`}
        className="block bg-neutral-50 aspect-square overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </a>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Nombre */}
        <a href={`/productos/${slug}`} className="block">
          <h3 className="font-semibold text-neutral-800 text-sm leading-snug line-clamp-2 hover:text-neutral-700 transition-colors">
            {name}
          </h3>
        </a>

        {/* Descripción corta */}
        {product.description && (
          <p className="text-neutral-500 text-xs line-clamp-1">
            {product.description.length > 60
              ? product.description.substring(0, 55) + '...'
              : product.description}
          </p>
        )}

        {/* Precio */}
        <p className="text-neutral-900 font-bold text-lg mt-auto">
          ${price.toLocaleString()}
          {currency}
        </p>

        {/* Botón Añadir al Carrito */}
        <button
          onClick={handleAddToCart}
          className={`
            w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300
            ${isAdded
              ? 'bg-green-500 text-white'
              : 'bg-gray-800 hover:bg-gray-700 text-white'
            }
          `}
        >
          {isAdded ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              ¡Añadido!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Añadir
            </>
          )}
        </button>
      </div>
    </article>
  );
}