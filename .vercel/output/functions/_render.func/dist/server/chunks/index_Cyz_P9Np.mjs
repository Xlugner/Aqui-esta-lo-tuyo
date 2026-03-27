import { c as createComponent } from './astro-component_CRfCvGHi.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_VEowKJm5.mjs';
import { r as renderComponent } from './entrypoint_D928OHCd.mjs';
import { r as renderScript } from './script_BqnEQNU8.mjs';
import { $ as $$AdminLayout } from './AdminLayout_Co7pfWay.mjs';
import { g as getSupabaseServer } from './admin-auth_HFCdXdjY.mjs';
import { a as getStoreConfig, b as uploadFile, e as getPublicUrl, f as updateStoreConfig } from './supabase_XKs3TGPF.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = getSupabaseServer(Astro2.cookies);
  const config = await getStoreConfig();
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    let logoUrl = config?.logo_url;
    const logoFile = formData.get("logo_file");
    if (logoFile && logoFile.size > 0) {
      console.log("🔍 Uploading logo file:", { name: logoFile.name, size: logoFile.size });
      const fileName = `${Date.now()}-${logoFile.name}`;
      const path = `store/${fileName}`;
      const uploadedPath = await uploadFile("store", path, logoFile, supabase);
      if (uploadedPath) {
        logoUrl = getPublicUrl("store", uploadedPath, supabase);
        console.log("✅ Logo uploaded:", logoUrl);
      } else {
        console.error("❌ Error uploading logo");
      }
    }
    const newConfig = {
      store_name: formData.get("store_name")?.toString() || "",
      description: formData.get("description")?.toString() || void 0,
      logo_url: logoUrl,
      email: formData.get("email")?.toString() || void 0,
      phone: formData.get("phone")?.toString() || void 0,
      whatsapp_number: formData.get("whatsapp_number")?.toString() || void 0,
      address: formData.get("address")?.toString() || void 0,
      facebook_url: formData.get("facebook_url")?.toString() || void 0,
      instagram_url: formData.get("instagram_url")?.toString() || void 0,
      twitter_url: formData.get("twitter_url")?.toString() || void 0
    };
    if (config?.id) {
      newConfig.id = config.id;
    }
    const result = await updateStoreConfig(newConfig, supabase);
    if (result) {
      console.log("✅ Store config updated successfully");
    } else {
      console.error("❌ Error updating store config");
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Configuración", "currentPath": "/admin/configuracion" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-neutral-800 mb-6">Configuración de la Tienda</h1> <div class="bg-white rounded-lg shadow p-6 space-y-6"> <form method="POST" enctype="multipart/form-data" id="storeConfigForm"> <!-- Información General --> <div> <h2 class="text-lg font-semibold text-neutral-800 mb-4">Información General</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="store_name" class="block text-sm font-medium text-neutral-700 mb-2">
Nombre de la tienda
</label> <input type="text" id="store_name" name="store_name"${addAttribute(config?.store_name || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> </div> <div> <label for="logo_file" class="block text-sm font-medium text-neutral-700 mb-2">
Logo
</label> <div class="flex gap-2"> <input type="file" id="logo_file" name="logo_file" accept="image/*" class="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> ${config?.logo_url && renderTemplate`<div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"> <img${addAttribute(config.logo_url, "src")} alt="Logo actual" class="w-full h-full object-cover"> </div>`} </div> <p class="text-xs text-neutral-500 mt-1">Selecciona una imagen para actualizar el logo</p> </div> </div> <div class="mt-4"> <label for="description" class="block text-sm font-medium text-neutral-700 mb-2">
Descripción
</label> <textarea id="description" name="description" rows="3" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent">${config?.description || ""}</textarea> </div> </div> <!-- Contacto --> <div class="border-t border-neutral-200 pt-6"> <h2 class="text-lg font-semibold text-neutral-800 mb-4">Contacto</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
Email
</label> <input type="email" id="email" name="email"${addAttribute(config?.email || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> </div> <div> <label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
Teléfono
</label> <input type="tel" id="phone" name="phone"${addAttribute(config?.phone || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> </div> <div> <label for="whatsapp_number" class="block text-sm font-medium text-neutral-700 mb-2">
WhatsApp (solo número, con código de país)
</label> <input type="text" id="whatsapp_number" name="whatsapp_number"${addAttribute(config?.whatsapp_number || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base" placeholder="53123456789"> </div> <div> <label for="address" class="block text-sm font-medium text-neutral-700 mb-2">
Dirección
</label> <input type="text" id="address" name="address"${addAttribute(config?.address || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> </div> </div> </div> <!-- Redes Sociales --> <div class="border-t border-neutral-200 pt-6"> <h2 class="text-lg font-semibold text-neutral-800 mb-4">Redes Sociales</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div> <label for="facebook_url" class="block text-sm font-medium text-neutral-700 mb-2">
Facebook URL
</label> <input type="url" id="facebook_url" name="facebook_url"${addAttribute(config?.facebook_url || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base" placeholder="https://facebook.com/mitienda"> </div> <div> <label for="instagram_url" class="block text-sm font-medium text-neutral-700 mb-2">
Instagram URL
</label> <input type="url" id="instagram_url" name="instagram_url"${addAttribute(config?.instagram_url || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base" placeholder="https://instagram.com/mitienda"> </div> <div> <label for="twitter_url" class="block text-sm font-medium text-neutral-700 mb-2">
Twitter/X URL
</label> <input type="url" id="twitter_url" name="twitter_url"${addAttribute(config?.twitter_url || "", "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base" placeholder="https://twitter.com/mitienda"> </div> </div> </div> <!-- Submit --> <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200"> <button type="submit" class="w-full sm:w-auto bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Guardar Cambios
</button> </div> </form> </div> ${renderScript($$result2, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/configuracion/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/configuracion/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/configuracion/index.astro";
const $$url = "/admin/configuracion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
