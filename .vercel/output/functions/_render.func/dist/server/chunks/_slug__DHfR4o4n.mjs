/* empty css               */
import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_DdDRBIMc.mjs';
import { d as addCartItem, i as isCartOpen, $ as $$Layout, b as $$BackButton } from './BackButton_CvPaisJz.mjs';
import { q as getProductBySlug, r as getSupabaseImage } from './supabase_BFkBUlFH.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

const QuantitySelector = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    addCartItem(product, quantity);
    isCartOpen.set(false);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: "Cantidad:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-gray-300 rounded-lg", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleDecrease,
            className: "px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors",
            "aria-label": "Disminuir cantidad",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-4 h-4",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", { d: "M20 12H4" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "px-6 py-2 font-semibold min-w-[3rem] text-center", children: quantity }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleIncrease,
            className: "px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors",
            "aria-label": "Aumentar cantidad",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-4 h-4",
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", { d: "M12 4v16m8-8H4" })
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleAddToCart,
          className: `
            flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-bold transition-all flex items-center justify-center text-sm sm:text-base gap-1 sm:gap-2
            ${isAdded ? "bg-green-500 text-white" : "bg-neutral-900 hover:bg-neutral-700 text-white"}
          `,
          children: isAdded ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-1 sm:gap-2", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "¡Añadido!" })
          ] }) : /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-1 sm:gap-2", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Añadir al Carrito" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://wa.me/${"34123456789"}?text=${encodeURIComponent(`Hola! Me interesa: ${product.name} (cantidad: ${quantity})`)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "WhatsApp" })
          ]
        }
      )
    ] })
  ] });
};

const ProductGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };
  if (images.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "aspect-square bg-gray-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Sin imagen" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "aspect-square bg-gray-50 rounded-lg overflow-hidden relative",
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: [
          images.map((image, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: image.url,
                  alt: image.alt,
                  className: "w-full h-full object-contain p-8"
                }
              )
            },
            index
          )),
          images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: prevSlide,
                className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10",
                "aria-label": "Imagen anterior",
                children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-800", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M15 19l-7-7 7-7" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: nextSlide,
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10",
                "aria-label": "Imagen siguiente",
                children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-800", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M9 5l7 7-7 7" }) })
              }
            )
          ] })
        ]
      }
    ),
    images.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-4", children: images.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => goToSlide(index),
        className: `w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? "bg-primary-500 w-6" : "bg-gray-300 hover:bg-gray-400"}`,
        "aria-label": `Ir a imagen ${index + 1}`
      },
      index
    )) })
  ] });
};

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  Astro2.response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  Astro2.response.headers.set("Pragma", "no-cache");
  Astro2.response.headers.set("Expires", "0");
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/productos");
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    return Astro2.redirect("/404");
  }
  console.log("=== DEBUG [slug].astro ===");
  console.log("Product slug:", slug);
  console.log("Product:", product);
  console.log("Product images:", product.images);
  const { name, description, price, currency, images, category } = product;
  const galleryImages = images && images.length > 0 ? images.map((img) => ({
    url: getSupabaseImage(img.image_url),
    alt: img.alt_text || name
  })) : [{ url: "/placeholder.jpg", alt: name }];
  const imageUrl = galleryImages[0]?.url || "/placeholder.jpg";
  const cartItem = {
    id: product.id,
    name,
    price,
    currency,
    slug,
    image: imageUrl
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": name }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ${renderComponent($$result2, "BackButton", $$BackButton, { "fallbackUrl": "/productos" })} <!-- Grid Principal: Imagen + Info --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"> <!-- Galería de Imágenes --> <div> ${renderComponent($$result2, "ProductGallery", ProductGallery, { "client:load": true, "images": galleryImages, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/ProductGallery", "client:component-export": "default" })} </div> <!-- Información del Producto --> <div class="flex flex-col"> <!-- Título --> <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"> ${name} </h1> <!-- Categoría y Stock --> <div class="flex items-center gap-4 mb-6"> ${category?.name && renderTemplate`<div class="flex items-center gap-2 text-gray-600"> <svg class="w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg> <span class="font-medium">${category.name}</span> </div>`} </div> <!-- Precios --> <div class="mb-6"> <div class="flex items-baseline gap-3"> <span class="text-4xl font-bold text-primary-500">
$ ${price.toLocaleString()} ${currency} </span> </div> </div> <!-- Descripción --> <div class="mb-8 pb-8 border-b"> <p class="text-gray-600 leading-relaxed"> ${description} </p> </div> <!-- Selector de Cantidad y Botones --> <div class="space-y-4"> ${renderComponent($$result2, "QuantitySelector", QuantitySelector, { "client:load": true, "product": cartItem, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/QuantitySelector", "client:component-export": "QuantitySelector" })} </div> <!-- Información adicional --> <div class="mt-8 pt-8 border-t"> <h3 class="font-semibold text-gray-800 mb-4 text-lg">
Información adicional
</h3> <ul class="space-y-3"> <li class="flex items-center gap-3 text-gray-600"> <svg class="w-5 h-5 text-gray-800 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M5 13l4 4L19 7"></path> </svg> <span>Pedido por WhatsApp</span> </li> <li class="flex items-center gap-3 text-gray-600"> <svg class="w-5 h-5 text-gray-800 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M5 13l4 4L19 7"></path> </svg> <span>Atención personalizada</span> </li> <li class="flex items-center gap-3 text-gray-600"> <svg class="w-5 h-5 text-gray-800 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M5 13l4 4L19 7"></path> </svg> <span>Consulta disponibilidad</span> </li> </ul> </div> </div> </div> </div> ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/productos/[slug].astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/productos/[slug].astro";
const $$url = "/productos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
