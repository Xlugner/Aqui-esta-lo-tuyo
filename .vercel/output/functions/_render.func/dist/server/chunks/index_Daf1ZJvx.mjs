import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead, a2 as addAttribute } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_BvKCLPeq.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CF4daztq.mjs';
import { $ as $$NotificationScript } from './NotificationScript_aqGyLlsd.mjs';
import { g as getSupabaseServer } from './admin-auth_HFCdXdjY.mjs';
import { g as getCategories, d as deleteCategory } from './supabase_BFkBUlFH.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = getSupabaseServer(Astro2.cookies);
  const categories = await getCategories(supabase);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    const categoryId = formData.get("categoryId")?.toString();
    if (action === "delete" && categoryId) {
      await deleteCategory(categoryId, supabase);
      return Astro2.redirect("/admin/categorias");
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Categorías", "currentPath": "/admin/categorias" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6"> <h1 class="text-2xl sm:text-3xl font-bold text-neutral-800">Categorías</h1> <a href="/admin/categorias/nuevo" class="w-full sm:w-auto bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> <span class="hidden sm:inline">Nueva Categoría</span> <span class="sm:hidden">Nueva</span> </a> </div> ${categories.length === 0 ? renderTemplate`<div class="bg-white rounded-lg shadow p-6 sm:p-12 text-center"> <svg class="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg> <p class="text-neutral-500 text-base sm:text-lg mb-4">No hay categorías aún</p> <a href="/admin/categorias/nuevo" class="text-neutral-900 font-medium hover:underline">
Crear la primera categoría →
</a> </div>` : renderTemplate`<div class="bg-white rounded-lg shadow overflow-x-auto"> <table class="w-full min-w-max"> <thead class="bg-neutral-50"> <tr> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500">Nombre</th> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500 hidden sm:table-cell">Slug</th> <th class="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500 hidden md:table-cell">Descripción</th> <th class="text-right py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-neutral-500">Acciones</th> </tr> </thead> <tbody> ${categories.map((category) => renderTemplate`<tr class="border-t border-neutral-100 hover:bg-neutral-50"> <td class="py-3 px-3 sm:px-6"> <span class="font-medium text-neutral-800 text-sm sm:text-base">${category.name}</span> </td> <td class="py-3 px-3 sm:px-6 hidden sm:table-cell"> <code class="text-xs sm:text-sm bg-neutral-100 px-2 py-1 rounded">${category.slug}</code> </td> <td class="py-3 px-3 sm:px-6 text-neutral-600 text-sm hidden md:table-cell truncate max-w-xs"> ${category.description || "-"} </td> <td class="py-3 px-3 sm:px-6"> <div class="flex items-center justify-end gap-1 sm:gap-2"> <a${addAttribute(`/admin/categorias/${category.id}/editar`, "href")} class="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors" title="Editar"> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg> </a> <form method="POST" class="inline" data-notifications="true"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="categoryId"${addAttribute(category.id, "value")}> <button type="submit" class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" title="Eliminar" onclick="return confirm('¿Estás seguro de eliminar esta categoría?')"> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </form> </div> </td> </tr>`)} </tbody> </table> </div>`}` })} ${renderComponent($$result, "NotificationScript", $$NotificationScript, {})}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/categorias/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/categorias/index.astro";
const $$url = "/admin/categorias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
