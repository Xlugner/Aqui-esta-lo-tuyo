import { c as createComponent } from './astro-component_D3Ic-nKB.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead } from './sequence_B6kYL9KL.mjs';
import { r as renderComponent } from './server_Dp61SpIq.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DPWEJSQA.mjs';
import { g as getSupabaseServer, b as getCurrentAdmin, c as changePassword } from './admin-auth_HFCdXdjY.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = getSupabaseServer(Astro2.cookies);
  const admin = await getCurrentAdmin(supabase);
  let successMessage;
  let errorMessage;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const newPassword = formData.get("new_password")?.toString() || "";
    const confirmPassword = formData.get("confirm_password")?.toString() || "";
    if (newPassword.length < 6) {
      errorMessage = "La contraseña debe tener al menos 6 caracteres";
    } else if (newPassword !== confirmPassword) {
      errorMessage = "Las contraseñas no coinciden";
    } else {
      const result = await changePassword(newPassword, Astro2.cookies);
      if (result.success) {
        successMessage = "Contraseña actualizada correctamente";
      } else {
        errorMessage = result.error || "Error al cambiar la contraseña";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Perfil", "currentPath": "/admin/perfil" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-neutral-800 mb-6">Mi Perfil</h1> ${successMessage && renderTemplate`<div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${successMessage}</p> </div>`}${errorMessage && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${errorMessage}</p> </div>`}<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <!-- Información del usuario --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-lg font-semibold text-neutral-800 mb-4">Información</h2> <div class="space-y-4"> <div> <label class="block text-sm font-medium text-neutral-500 mb-1">Email</label> <p class="text-neutral-800">${admin?.email}</p> </div> <div> <label class="block text-sm font-medium text-neutral-500 mb-1">Nombre</label> <p class="text-neutral-800">${admin?.full_name || "No especificado"}</p> </div> </div> </div> <!-- Cambiar contraseña --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-lg font-semibold text-neutral-800 mb-4">Cambiar Contraseña</h2> <form method="POST" class="space-y-4"> <div> <label for="new_password" class="block text-sm font-medium text-neutral-700 mb-2">
Nueva contraseña
</label> <input type="password" id="new_password" name="new_password" required minlength="6" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Mínimo 6 caracteres"> </div> <div> <label for="confirm_password" class="block text-sm font-medium text-neutral-700 mb-2">
Confirmar contraseña
</label> <input type="password" id="confirm_password" name="confirm_password" required minlength="6" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Repite la contraseña"> </div> <button type="submit" class="w-full bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Cambiar Contraseña
</button> </form> </div> </div> ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/perfil/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/perfil/index.astro";
const $$url = "/admin/perfil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
