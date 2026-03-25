import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { L as maybeRenderHead, a2 as addAttribute, K as renderTemplate } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_nWy2EOUn.mjs';
import { r as getSupabaseImage } from './supabase_BFkBUlFH.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as addCartItem, i as isCartOpen } from './Layout_CIwwD8TO.mjs';

const AddToCartButton = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleClick = () => {
    addCartItem(product);
    isCartOpen.set(false);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2e3);
  };
  if (!mounted) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        disabled: true,
        className: "w-full py-3 px-6 rounded-lg font-bold bg-gray-300 text-gray-500 cursor-not-allowed",
        children: "Cargando..."
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      disabled: isAdded,
      className: `
        w-full py-2 px-3 sm:py-3 sm:px-6 rounded-lg font-bold transition-all flex items-center justify-center text-sm sm:text-base gap-1 sm:gap-2
        ${isAdded ? "bg-green-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}
      `,
      children: isAdded ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-1 sm:gap-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "¡Añadido!" })
      ] }) : /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-1 sm:gap-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Añadir al Carrito" })
      ] })
    }
  );
};

const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const { name, price, currency, slug, description, images } = product;
  const firstImage = images && images.length > 0 ? images[0] : null;
  const imageUrl = getSupabaseImage(firstImage?.image_url);
  console.log("=== DEBUG ProductCard ===");
  console.log("Product:", name);
  console.log("Images array:", images);
  console.log("First image:", firstImage);
  console.log("Image URL:", imageUrl);
  const cartItem = {
    id: product.id,
    name,
    price,
    currency,
    slug,
    image: imageUrl
  };
  return renderTemplate`<!--
  COMPONENTE: ProductCard (Vertical)
  
  Tarjeta vertical para grid de productos
  Muestra badge "Más Vendido" si está marcado como featured
-->${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow" data-astro-cid-ub63nygq> <a${addAttribute(`/productos/${slug}`, "href")} class="block relative" data-astro-cid-ub63nygq> <!-- Badge "Más Vendido" --> ${product.featured && renderTemplate`<div class="absolute top-2 left-2 z-10" data-astro-cid-ub63nygq> <span class="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-md" data-astro-cid-ub63nygq>
Más Vendido
</span> </div>`} <!-- Imagen del producto --> <div class="aspect-square overflow-hidden bg-neutral-100" data-astro-cid-ub63nygq> <img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300" loading="lazy" data-astro-cid-ub63nygq> </div> </a> <!-- Información del producto --> <div class="p-4" data-astro-cid-ub63nygq> <a${addAttribute(`/productos/${slug}`, "href")} data-astro-cid-ub63nygq> <h3 class="text-neutral-800 font-semibold text-sm mb-1 line-clamp-2 hover:text-neutral-700 transition-colors" data-astro-cid-ub63nygq> ${name} </h3> </a> <p class="text-neutral-500 text-xs mb-3 h-6 overflow-hidden" data-astro-cid-ub63nygq> ${description && description.length > 80 ? description.substring(0, 70) + "..." : description} </p> <!-- Precios --> <div class="flex items-center gap-2 mb-3" data-astro-cid-ub63nygq> <span class="text-neutral-900 font-bold text-lg" data-astro-cid-ub63nygq>
$ ${price.toLocaleString()} ${currency} </span> </div> <!-- Botón de añadir al carrito (React Island) --> ${renderComponent($$result, "AddToCartButton", AddToCartButton, { "client:load": true, "product": cartItem, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/AddToCartButton", "client:component-export": "AddToCartButton", "data-astro-cid-ub63nygq": true })} </div> </div>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/ProductCard.astro", void 0);

export { $$ProductCard as $ };
