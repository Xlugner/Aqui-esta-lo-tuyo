import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { L as maybeRenderHead, a2 as addAttribute, K as renderTemplate } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_Hdn9W_io.mjs';
import { r as renderScript } from './script_8Lc7_j8H.mjs';
import { $ as $$Layout } from './Layout_DxmlB7o_.mjs';
import { o as getProducts, g as getCategories } from './supabase_XKs3TGPF.mjs';
import { $ as $$ProductCard } from './ProductCard_RY9sO-cv.mjs';
import 'clsx';
import { $ as $$BackButton } from './BackButton_BPI-X1u_.mjs';

const $$CategoryCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CategoryCarousel;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-8"> <h2 class="text-2xl font-bold text-neutral-800 mb-4">Categorías</h2> <div class="flex space-x-4 overflow-x-auto pb-4"> <button class="category-filter bg-neutral-900 text-white px-4 py-2 rounded-full whitespace-nowrap" data-slug="all">Todas</button> ${categories.map((category) => renderTemplate`<button class="category-filter bg-white text-neutral-700 px-4 py-2 rounded-full whitespace-nowrap border border-neutral-300 hover:bg-neutral-200 transition-colors"${addAttribute(category.slug, "data-slug")}> ${category.name} </button>`)} </div> </div>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/CategoryCarousel.astro", void 0);

const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Productos;
  const products = await getProducts();
  const categories = await getCategories();
  console.log("=== DEBUG productos.astro ===");
  console.log("Total products:", products.length);
  console.log("First product:", products[0]);
  console.log("First product images:", products[0]?.images);
  const search = Astro2.url.searchParams.get("search");
  const searchQuery = search ? search.toLowerCase() : "";
  const filteredProducts = searchQuery ? products.filter(
    (product) => product.name.toLowerCase().includes(searchQuery)
  ) : products;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": searchQuery ? `Resultados: ${search}` : "Productos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "BackButton", $$BackButton, {})} <h1 class="text-4xl font-bold text-neutral-800 mb-2"> ${searchQuery ? `Resultados de búsqueda: "${search}"` : "Nuestros Productos"} </h1> ${searchQuery && renderTemplate`<p class="text-neutral-600 mb-8">
Se encontraron ${filteredProducts.length} producto
${filteredProducts.length !== 1 ? "s" : ""} </p>`} ${!searchQuery && renderTemplate`${renderComponent($$result2, "CategoryCarousel", $$CategoryCarousel, { "categories": categories })}`} <div id="product-list" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> ${filteredProducts.length > 0 ? filteredProducts.map((product) => renderTemplate`<div class="product-item"${addAttribute(product.category?.slug || "", "data-category")}> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product })} </div>`) : renderTemplate`<div class="col-span-full text-center py-12"> <p class="text-neutral-500 text-lg">No se encontraron productos.</p> <a href="/productos" class="text-primary hover:underline mt-2 inline-block">
Ver todos los productos
</a> </div>`} </div> </div> ` })} ${renderScript($$result, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/productos.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/productos.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
