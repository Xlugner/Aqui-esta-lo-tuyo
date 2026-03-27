import { c as createComponent } from './astro-component_CRfCvGHi.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_VEowKJm5.mjs';
import { r as renderComponent } from './entrypoint_DsVY1U29.mjs';
import { $ as $$AdminLayout } from './AdminLayout_Co7pfWay.mjs';
import { $ as $$NotificationScript } from './NotificationScript_C2dp-ybF.mjs';
import { g as getSupabaseServer } from './admin-auth_HFCdXdjY.mjs';
import { o as getProducts, g as getCategories, p as deleteProduct } from './supabase_XKs3TGPF.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = getSupabaseServer(Astro2.cookies);
  const products = await getProducts(supabase);
  await getCategories(supabase);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    const productId = formData.get("productId")?.toString();
    if (action === "delete" && productId) {
      console.log("Eliminando producto:", productId);
      const result = await deleteProduct(productId, supabase);
      console.log("Resultado eliminación:", result);
      return Astro2.redirect("/admin/productos");
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Productos", "currentPath": "/admin/productos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"> <h1 class="text-2xl sm:text-3xl font-bold text-neutral-800">Productos</h1> <a href="/admin/productos/nuevo" class="w-full sm:w-auto bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> <span class="hidden sm:inline">Nuevo Producto</span> <span class="sm:hidden">Nuevo</span> </a> </div> ${products.length === 0 ? renderTemplate`<div class="bg-white rounded-lg shadow p-6 sm:p-12 text-center"> <svg class="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path> </svg> <p class="text-neutral-500 text-base sm:text-lg mb-4">No hay productos aún</p> <a href="/admin/productos/nuevo" class="text-neutral-900 font-medium hover:underline">
Crear el primer producto →
</a> </div>` : renderTemplate`<div class="bg-white rounded-lg shadow overflow-x-auto"> <table class="w-full min-w-max"> <thead class="bg-neutral-50"> <tr> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500">Producto</th> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500 hidden sm:table-cell">Precio</th> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500 hidden md:table-cell">Categoría</th> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500 hidden lg:table-cell">Estado</th> <th class="text-right py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500">Acciones</th> </tr> </thead> <tbody> ${products.map((product) => renderTemplate`<tr class="border-t border-neutral-100 hover:bg-neutral-50"> <td class="py-3 px-3 sm:px-6"> <div class="flex items-center gap-2 sm:gap-3"> <div class="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0"> ${product.images?.[0] ? renderTemplate`<img${addAttribute(product.images[0].image_url, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover">` : renderTemplate`<svg class="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>`} </div> <div class="min-w-0"> <p class="font-medium text-neutral-800 text-sm sm:text-base truncate">${product.name}</p> <p class="text-xs sm:text-sm text-neutral-500 truncate max-w-xs hidden sm:block">${product.description?.substring(0, 50)}...</p> <p class="text-xs text-neutral-500 sm:hidden">$${product.price.toLocaleString()} ${product.currency}</p> </div> </div> </td> <td class="py-3 px-3 sm:px-6 text-neutral-600 text-sm hidden sm:table-cell">
$${product.price.toLocaleString()} ${product.currency} </td> <td class="py-3 px-3 sm:px-6 text-neutral-600 text-sm hidden md:table-cell"> ${product.category?.name || "-"} </td> <td class="py-3 px-3 sm:px-6 hidden lg:table-cell"> ${product.featured ? renderTemplate`<span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
Destacado
</span>` : renderTemplate`<span class="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
Normal
</span>`} </td> <td class="py-3 px-3 sm:px-6"> <div class="flex items-center justify-end gap-1 sm:gap-2"> <a${addAttribute(`/admin/productos/${product.id}/editar`, "href")} class="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors" title="Editar"> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </a> <form method="POST" class="inline" data-notifications="true"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="productId"${addAttribute(product.id, "value")}> <button type="submit" class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar" onclick="return confirm('¿Estás seguro de eliminar este producto?')"> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </form> </div> </td> </tr>`)} </tbody> </table> </div>`}` })} ${renderComponent($$result, "NotificationScript", $$NotificationScript, {})}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/productos/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/productos/index.astro";
const $$url = "/admin/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
