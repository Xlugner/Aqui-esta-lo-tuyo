/* empty css               */
import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_DRoMatCi.mjs';
import { $ as $$AdminLayout } from './AdminLayout_d0iY4EX0.mjs';
import { $ as $$NotificationScript } from './NotificationScript_aqGyLlsd.mjs';
import { g as getSupabaseServer } from './admin-auth_CO7OFhP7.mjs';
import { c as createCategory } from './supabase_BFkBUlFH.mjs';

const $$Nuevo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nuevo;
  const supabase = getSupabaseServer(Astro2.cookies);
  let errorMessage;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const slug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const category = await createCategory({
      name,
      slug,
      description: description || void 0
    }, supabase);
    if (category) {
      return Astro2.redirect("/admin/categorias");
    } else {
      errorMessage = "Error al crear la categoría. El slug podría ya existir.";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Nueva Categoría", "currentPath": "/admin/categorias" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-xl mx-auto"> <div class="flex items-center gap-4 mb-6"> <a href="/admin/categorias" class="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <h1 class="text-2xl font-bold text-neutral-800">Nueva Categoría</h1> </div> ${errorMessage && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${errorMessage}</p> </div>`} <form method="POST" data-notifications="true" class="bg-white rounded-lg shadow p-6 space-y-6"> <!-- Nombre --> <div> <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
Nombre de la categoría *
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Ej: Electrónica"> </div> <!-- Descripción --> <div> <label for="description" class="block text-sm font-medium text-neutral-700 mb-2">
Descripción
</label> <textarea id="description" name="description" rows="3" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Descripción breve de la categoría..."></textarea> </div> <!-- Submit --> <div class="flex gap-4 pt-4 border-t border-neutral-200"> <a href="/admin/categorias" class="px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors">
Cancelar
</a> <button type="submit" class="flex-1 bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Crear Categoría
</button> </div> </form> </div> ` })} ${renderComponent($$result, "NotificationScript", $$NotificationScript, {})}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/categorias/nuevo.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/categorias/nuevo.astro";
const $$url = "/admin/categorias/nuevo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nuevo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
