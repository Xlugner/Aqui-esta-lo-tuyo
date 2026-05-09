import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../lib/types';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Skeleton de carga
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
            <div className="aspect-square bg-neutral-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-neutral-200 rounded w-3/4" />
              <div className="h-6 bg-neutral-200 rounded w-1/2" />
              <div className="h-10 bg-neutral-200 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <p className="text-center text-neutral-500 py-8 text-lg">
        No hay productos destacados disponibles.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}