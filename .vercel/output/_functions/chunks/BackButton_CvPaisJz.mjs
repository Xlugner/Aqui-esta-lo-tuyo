import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { L as maybeRenderHead, a2 as addAttribute, K as renderTemplate, b7 as renderHead, b8 as renderSlot, b9 as defineScriptVars } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_DdDRBIMc.mjs';
import 'clsx';
import { a as getStoreConfig, r as getSupabaseImage, s as getFeaturedProducts, g as getCategories, h as getHeroSection } from './supabase_BFkBUlFH.mjs';
import { r as renderScript } from './script_8Lc7_j8H.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { atom, map, computed } from 'nanostores';

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const storeConfig = await getStoreConfig();
  const storeName = storeConfig?.store_name || "Mi Tienda Online";
  const storeEmail = storeConfig?.email || "contacto@mitienda.com";
  const storePhone = storeConfig?.phone || "34123456789";
  const storeLocation = storeConfig?.address || "Bayamo, Granma, Cuba";
  const logoUrl = getSupabaseImage(storeConfig?.logo_url);
  const featuredProducts = await getFeaturedProducts();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-900 text-white mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Columna 1: Logo y Redes Sociales --> <div> <div class="flex items-center gap-3 mb-6"> ${logoUrl && logoUrl !== "/placeholder.jpg" && logoUrl.trim() ? renderTemplate`<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden"> <img${addAttribute(logoUrl, "src")}${addAttribute(storeName, "alt")} class="w-full h-full object-cover"> </div>` : renderTemplate`<div class="w-16 h-16 bg-white rounded-full flex items-center justify-center"> <svg class="w-10 h-10 text-primary-dark" fill="currentColor" viewBox="0 0 20 20"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg> </div>`} <h3 class="text-2xl font-bold">${storeName}</h3> </div> <!-- Redes Sociales --> <div class="flex gap-4"> ${storeConfig?.instagram_url && renderTemplate`<a${addAttribute(storeConfig.instagram_url, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a>`} <a${addAttribute(`https://wa.me/${storeConfig?.whatsapp_number || "34123456789"}`, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> </a> ${storeConfig?.facebook_url && renderTemplate`<a${addAttribute(storeConfig.facebook_url, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a>`} </div> </div> <!-- Columna 2: Contacto --> <div> <h3 class="text-lg font-bold mb-4">Contacto</h3> <ul class="space-y-3"> <li> <a${addAttribute(`mailto:${storeEmail}`, "href")} class="hover:opacity-80 transition-opacity flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${storeEmail} </a> </li> <li> <a${addAttribute(`tel:${storePhone}`, "href")} class="hover:opacity-80 transition-opacity flex items-center gap-2"> <svg class="w-4 h-4" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${storePhone} </a> </li> <li class="flex items-start gap-2"> <svg class="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${storeLocation}</span> </li> </ul> </div> <!-- Columna 3: Productos + Acceso --> <div> <h3 class="text-lg font-bold mb-4">Productos</h3> <ul class="space-y-2 mb-6"> ${featuredProducts.map((product) => renderTemplate`<li class="hover:bg-neutral-100/50 px-2 py-1 rounded transition-colors"> <a${addAttribute(`/productos/${product.slug}`, "href")} class="hover:opacity-80 transition-opacity text-sm"> ${product.name} </a> </li>`)} </ul> <!-- Botón Dashboard (opcional, para admin) --> <div class="mt-6"> <h3 class="text-lg font-bold mb-4">Acceso</h3> <a href="/admin/login" class="inline-flex items-center gap-2 bg-neutral-100 text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"> <svg class="w-4 h-4" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg>
Admin
</a> </div> </div> </div> <!-- Copyright --> <div class="border-t border-white/20 mt-8 pt-8 text-center"> <p class="text-sm text-white/80">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/Footer.astro", void 0);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [storeConfig, setStoreConfig] = useState(null);
  const [categories, setCategories] = useState([]);
  const [heroSection, setHeroSection] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [config, cats, hero] = await Promise.all([
          getStoreConfig(),
          getCategories(),
          getHeroSection()
        ]);
        setStoreConfig(config);
        setCategories(cats);
        setHeroSection(hero);
      } catch (error) {
        console.error("Error fetching mobile menu data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "text-white p-2 hover:bg-primary-dark rounded-lg transition-colors",
        "aria-label": "Abrir menú",
        children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" }) })
      }
    ),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative bg-hero-gradient h-64 overflow-hidden", children: [
            heroSection?.images?.[0] && /* @__PURE__ */ jsx(
              "img",
              {
                src: getSupabaseImage(heroSection.images[0].image_url),
                alt: heroSection.images[0].alt_text || "Banner promocional",
                className: "w-full h-full object-cover"
              }
            ),
            !heroSection?.images?.[0] && storeConfig?.logo_url && /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: getSupabaseImage(storeConfig.logo_url),
                alt: storeConfig.store_name,
                className: "w-32 h-32 object-contain"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-[calc(100%-16rem)]", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-6 border-b", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-neutral-800 mb-4", children: storeConfig?.store_name || "Tienda Online" }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                storeConfig?.instagram_url && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: storeConfig.instagram_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors",
                    "aria-label": "Instagram",
                    children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-neutral-700", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
                  }
                ),
                storeConfig?.whatsapp_number && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `https://wa.me/${storeConfig.whatsapp_number}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors",
                    "aria-label": "WhatsApp",
                    children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-neutral-700", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) })
                  }
                ),
                storeConfig?.facebook_url && /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: storeConfig.facebook_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors",
                    "aria-label": "Facebook",
                    children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-neutral-700", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("nav", { className: "flex-1 overflow-y-auto p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3", children: "Navegación" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/productos",
                    className: "block py-3 px-4 text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors font-medium",
                    onClick: () => setIsOpen(false),
                    children: "Productos"
                  }
                ) }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3", children: "Contacto" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-neutral-600", children: [
                  storeConfig?.email && /* @__PURE__ */ jsx("p", { children: storeConfig.email }),
                  storeConfig?.phone && /* @__PURE__ */ jsx("p", { children: storeConfig.phone }),
                  storeConfig?.address && /* @__PURE__ */ jsx("p", { children: storeConfig.address })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const storeConfig = await getStoreConfig();
  const storeName = storeConfig?.store_name || "Mi Tienda Online";
  const logoUrl = getSupabaseImage(storeConfig?.logo_url);
  return renderTemplate`<!-- Header  -->${maybeRenderHead()}<header class="bg-neutral-900 text-white sticky top-0 z-50 shadow-md"> <nav class="max-w-7xl mx-auto px-4 py-3"> <div class="flex justify-between items-center"> <!-- Logo --> <a href="/" class="flex items-center gap-3"> ${logoUrl && logoUrl !== "/placeholder.jpg" && logoUrl.trim() ? renderTemplate`<div class="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0"> <img${addAttribute(logoUrl, "src")}${addAttribute(storeName, "alt")} class="w-full h-full object-cover" loading="lazy"> </div>` : renderTemplate`<div class="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0"> <svg class="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 20 20"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg> </div>`} <!-- Nombre solo en desktop --> <span class="font-bold text-lg hidden sm:inline"> ${storeName} </span> </a> <!-- Navegación Desktop (centrada) --> <nav class="hidden md:flex items-center space-x-8"> <a href="/" class="hover:opacity-80 font-medium transition-opacity">
Inicio
</a> <a href="/productos" class="hover:opacity-80 font-medium transition-opacity">
Productos
</a> </nav> <!-- Iconos de la derecha --> <div class="flex items-center gap-2"> <!-- Icono de Búsqueda --> <button id="searchButton" class="hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-neutral-700" aria-label="Buscar"> <svg class="w-6 h-6" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Menú Hamburguesa (solo móvil) --> <div class="md:hidden"> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/MobileMenu", "client:component-export": "MobileMenu" })} </div> </div> </div> </nav> </header> <!-- Barra de búsqueda desplegable (oculta por defecto) --> <div id="searchBar" class="bg-white shadow-md overflow-hidden transition-all duration-300 max-h-0"> <div class="max-w-7xl mx-auto px-4 py-4"> <div class="relative"> <input type="text" id="searchInput" placeholder="Buscar productos..." class="w-full pl-12 pr-12 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-neutral-700"> <svg class="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <button id="searchSubmitBtn" class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary transition-colors" aria-label="Buscar"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path> </svg> </button> </div> </div> </div> ${renderScript($$result, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/Header.astro", void 0);

const isCartOpen = atom(false);
const cartItems = map({});
computed(cartItems, (items) => {
  return Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
});
const totalsByCurrency = computed(cartItems, (items) => {
  return Object.values(items).reduce(
    (totals, item) => {
      const subtotal = item.price * item.quantity;
      totals[item.currency] += subtotal;
      return totals;
    },
    { CUP: 0, USD: 0 }
  );
});
computed(totalsByCurrency, (totals) => {
  return totals.CUP + totals.USD;
});
function addCartItem(product, quantity = 1) {
  const productKey = String(product.id);
  const existingEntry = cartItems.get()[productKey];
  if (existingEntry) {
    cartItems.setKey(productKey, {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity
    });
  } else {
    cartItems.setKey(productKey, {
      ...product,
      quantity
    });
  }
}
function removeCartItem(id) {
  const current = cartItems.get();
  const { [id]: _, ...rest } = current;
  cartItems.set(rest);
}
function updateItemQuantity(id, quantity) {
  const item = cartItems.get()[id];
  if (!item) return;
  if (quantity < 1) {
    removeCartItem(id);
    return;
  }
  cartItems.setKey(id, { ...item, quantity });
}
function clearCart() {
  cartItems.set({});
}
if (typeof window !== "undefined") {
  const CART_STORAGE_KEY = "astro-cart-data";
  const savedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (savedCart) {
    try {
      cartItems.set(JSON.parse(savedCart));
    } catch (e) {
      console.error(e);
    }
  }
  cartItems.subscribe((val) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(val));
  });
}

const FloatingButtons = ({ onOpenCart }) => {
  const [storeConfig, setStoreConfig] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    getStoreConfig().then((config) => setStoreConfig(config));
  }, []);
  const whatsappNumber = storeConfig?.whatsapp_number || "34123456789";
  useEffect(() => {
    const unsubscribe = cartItems.subscribe((items) => {
      const totalQuantity = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(totalQuantity);
    });
    return unsubscribe;
  }, []);
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola! Quisiera más información sobre sus productos.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleWhatsApp,
        className: "w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110",
        "aria-label": "Contactar por WhatsApp",
        children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945a11.815 11.815 0 0012.822 2.563c1.9-1.803 2.563-4.85 2.563-7.945 0-6.557-5.365-11.892-11.965-11.892" }) })
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => isCartOpen.set(true),
        className: "w-14 h-14 bg-blue-950 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 relative",
        "aria-label": "Abrir carrito",
        children: [
          /* @__PURE__ */ jsx("svg", { className: "w-7 h-7", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) }),
          totalItems > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse", children: totalItems > 9 ? "9+" : totalItems })
        ]
      }
    )
  ] });
};

const Cart = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([]);
  const [view, setView] = useState("cart");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    ci: "",
    address: "",
    municipality: "",
    province: "",
    reference: "",
    phone: "",
    paymentMethod: "usd"
  });
  useEffect(() => {
    const unsubscribe = cartItems.subscribe((cartData) => {
      setItems(Object.values(cartData));
    });
    return unsubscribe;
  }, []);
  const totals = totalsByCurrency.get();
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
        onClick: onClose,
        role: "presentation"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "fixed right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral-900 text-white p-3 sm:p-4 flex justify-between items-center sticky top-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "p-1 sm:p-2 hover:bg-neutral-700 rounded-lg transition-colors",
            "aria-label": "Volver",
            children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 sm:w-6 sm:h-6", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) })
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-lg sm:text-xl font-bold", children: "Carrito" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: clearCart,
            className: "text-xs sm:text-sm hover:underline",
            children: "Vaciar"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-3 sm:p-4", children: items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8 sm:py-12", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-16 h-16 sm:w-24 sm:h-24 mx-auto text-neutral-300 mb-4", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-base sm:text-lg font-medium", children: "Tu carrito está vacío" })
      ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-3 sm:space-y-4", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pb-3 sm:pb-4 border-b", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.image,
            alt: item.name,
            className: "w-16 h-16 sm:w-20 sm:h-20 object-contain bg-neutral-100 rounded-lg flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-xs sm:text-sm text-neutral-800 line-clamp-1 mb-1", children: item.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-neutral-700 font-bold text-base sm:text-lg mb-2", children: [
            "$ ",
            item.price.toLocaleString(),
            " ",
            item.currency
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => updateItemQuantity(item.id, item.quantity - 1),
                className: "w-7 h-7 sm:w-8 sm:h-8 bg-neutral-900 hover:bg-neutral-700 text-white rounded-lg flex items-center justify-center transition-colors",
                "aria-label": "Disminuir cantidad",
                children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20 12H4" }) })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-neutral-800 min-w-[2rem] text-center text-sm", children: item.quantity }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => updateItemQuantity(item.id, item.quantity + 1),
                className: "w-7 h-7 sm:w-8 sm:h-8 bg-neutral-900 hover:bg-neutral-700 text-white rounded-lg flex items-center justify-center transition-colors",
                "aria-label": "Aumentar cantidad",
                children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 4v16m8-8H4" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => removeCartItem(item.id),
            className: "p-1 sm:p-2 text-error hover:bg-error/10 rounded-lg transition-colors flex-shrink-0",
            "aria-label": "Eliminar",
            children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) })
          }
        )
      ] }, item.id)) }) }),
      items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "border-t bg-white p-3 sm:p-4 space-y-3 sm:space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: (totals.CUP > 0 || totals.USD > 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-600 font-medium", children: "Resumen por moneda:" }),
          totals.CUP > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-neutral-700", children: "Total CUP:" }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-neutral-900", children: [
              "$ ",
              totals.CUP.toLocaleString(),
              " CUP"
            ] })
          ] }),
          totals.USD > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-neutral-700", children: "Total USD:" }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-neutral-900", children: [
              "$ ",
              totals.USD.toLocaleString(),
              " USD"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/checkout",
            className: "w-full bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-colors shadow-lg text-sm sm:text-base",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Proceder al Pago" }),
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
};

const CartWrapper = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const unsubscribe = isCartOpen.subscribe((value) => {
      setOpen(value);
    });
    return unsubscribe;
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Cart, { isOpen: open, onClose: () => isCartOpen.set(false) }) });
};

const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Tu tienda online" } = Astro2.props;
  const storeConfig = await getStoreConfig();
  const storeName = storeConfig?.store_name || "Mi Tienda Online";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} | ${storeName}</title>${renderHead()}</head> <body class="bg-neutral-50 text-neutral-700"> <!-- Header --> ${renderComponent($$result, "Header", $$Header, {})} <!-- Contenido principal --> <main class="min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- Carrito Modal --> ${renderComponent($$result, "CartWrapper", CartWrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/CartWrapper", "client:component-export": "CartWrapper" })} <!-- Botones Flotantes --> ${renderComponent($$result, "FloatingButtons", FloatingButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/FloatingButton", "client:component-export": "FloatingButtons" })} </body></html>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BackButton;
  const { fallbackUrl = "/" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button onclick="history.back()" class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"> <svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> <span class="font-medium">Volver</span> </button> <script>(function(){', '\n  const backButton = document.querySelector(\'button[onclick="history.back()"]\');\n  if (backButton && (!window.history.length || window.history.length === 1)) {\n    backButton.setAttribute("onclick", `window.location.href="${fallbackUrl}"`);\n  }\n})();<\/script>'], ["", '<button onclick="history.back()" class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"> <svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> <span class="font-medium">Volver</span> </button> <script>(function(){', '\n  const backButton = document.querySelector(\'button[onclick="history.back()"]\');\n  if (backButton && (!window.history.length || window.history.length === 1)) {\n    backButton.setAttribute("onclick", \\`window.location.href="\\${fallbackUrl}"\\`);\n  }\n})();<\/script>'])), maybeRenderHead(), defineScriptVars({ fallbackUrl }));
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/BackButton.astro", void 0);

export { $$Layout as $, clearCart as a, $$BackButton as b, cartItems as c, addCartItem as d, isCartOpen as i, totalsByCurrency as t };
