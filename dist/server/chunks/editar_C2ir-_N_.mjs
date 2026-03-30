import { c as createComponent } from './astro-component_D3Ic-nKB.mjs';
import 'piccolore';
import { Q as renderTemplate, B as maybeRenderHead, a3 as addAttribute } from './sequence_B6kYL9KL.mjs';
import { r as renderComponent } from './server_Dp61SpIq.mjs';
import { r as renderScript } from './script_BRfdXIpO.mjs';
import { $ as $$AdminLayout } from './AdminLayout_DPWEJSQA.mjs';
import { $ as $$NotificationScript } from './NotificationScript_CaMONMM2.mjs';
import { g as getSupabaseServer } from './admin-auth_HFCdXdjY.mjs';
import { l as getProductById, g as getCategories, m as updateProduct, b as uploadFile, n as deleteProductImages, k as addProductImages } from './supabase_XKs3TGPF.mjs';

const prerender = false;
const $$Editar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Editar;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/admin/productos");
  }
  const supabase = getSupabaseServer(Astro2.cookies);
  const product = await getProductById(id);
  const categories = await getCategories();
  if (!product) {
    return Astro2.redirect("/admin/productos");
  }
  let errorMessage;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const price = parseFloat(formData.get("price")?.toString() || "0");
    const currency = formData.get("currency")?.toString() || "USD";
    const category_id = formData.get("category_id")?.toString() || void 0;
    const featured = formData.get("featured") === "on";
    const slug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const updated = await updateProduct(id, {
      name,
      description,
      price,
      currency,
      slug,
      featured,
      category_id: category_id || void 0
    }, supabase);
    if (updated) {
      const imageFiles = formData.getAll("image_file");
      const imageUrls = formData.getAll("image_url");
      const imagesToAdd = [];
      const validFiles = imageFiles.filter((f) => f && f.size > 0);
      for (let i = 0; i < validFiles.length; i++) {
        const file = validFiles[i];
        console.log(`Procesando archivo ${i}:`, file.name);
        const fileName = `${Date.now()}-${i}-${file.name}`;
        const path = `products/${id}/${fileName}`;
        const uploadedPath = await uploadFile("products", path, file, supabase);
        if (uploadedPath) {
          const supabaseUrl = "https://jgyoodhsznqbmxibbszm.supabase.co";
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/products/${uploadedPath}`;
          imagesToAdd.push({
            image_url: publicUrl,
            alt_text: "",
            order_index: imagesToAdd.length
          });
        }
      }
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i]?.trim();
        if (url) {
          imagesToAdd.push({
            image_url: url,
            alt_text: "",
            order_index: imagesToAdd.length
          });
        }
      }
      await deleteProductImages(id, supabase);
      if (imagesToAdd.length > 0) {
        await addProductImages(id, imagesToAdd, supabase);
      }
      return Astro2.redirect("/admin/productos");
    } else {
      errorMessage = "Error al actualizar el producto";
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Editar Producto", "currentPath": "/admin/productos" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"> <a href="/admin/productos" class="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <h1 class="text-2xl sm:text-3xl font-bold text-neutral-800">Editar Producto</h1> </div> ${errorMessage && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${errorMessage}</p> </div>`} <form method="POST" enctype="multipart/form-data" data-notifications="true" class="bg-white rounded-lg shadow p-6 space-y-6"> <!-- Nombre --> <div> <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
Nombre del producto *
</label> <input type="text" id="name" name="name" required${addAttribute(product.name, "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"> </div> <!-- Descripción --> <div> <label for="description" class="block text-sm font-medium text-neutral-700 mb-2">
Descripción *
</label> <textarea id="description" name="description" required rows="4" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent">${product.description}</textarea> </div> <!-- Precio y Moneda --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div> <label for="price" class="block text-sm font-medium text-neutral-700 mb-2">
Precio *
</label> <input type="number" id="price" name="price" required min="0" step="0.01"${addAttribute(product.price, "value")} class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> </div> <div> <label for="currency" class="block text-sm font-medium text-neutral-700 mb-2">
Moneda *
</label> <select id="currency" name="currency" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent text-base"> <option value="USD"${addAttribute(product.currency === "USD", "selected")}>USD</option> <option value="CUP"${addAttribute(product.currency === "CUP", "selected")}>CUP</option> </select> </div> </div> <!-- Categoría --> <div> <label for="category_id" class="block text-sm font-medium text-neutral-700 mb-2">
Categoría
</label> <select id="category_id" name="category_id" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"> <option value="">Sin categoría</option> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat.id, "value")}${addAttribute(product.category_id === cat.id, "selected")}> ${cat.name} </option>`)} </select> </div> <!-- Destacado --> <div class="flex items-center gap-3"> <input type="checkbox" id="featured" name="featured"${addAttribute(product.featured, "checked")} class="w-5 h-5 text-neutral-900 border-neutral-300 rounded focus:ring-neutral-900"> <label for="featured" class="text-sm font-medium text-neutral-700">
Marcar como destacado
</label> </div> <!-- Imágenes --> <div> <label class="block text-sm font-medium text-neutral-700 mb-2">
Imágenes
</label> ${product.images && product.images.length > 0 && renderTemplate`<div class="mb-4"> <p class="text-sm text-neutral-600 mb-2">Imágenes actuales:</p> <div class="grid grid-cols-2 gap-2"> ${product.images.map((img) => renderTemplate`<div class="relative"> <img${addAttribute(img.image_url, "src")}${addAttribute(img.alt_text || "Producto", "alt")} class="w-full h-24 object-cover rounded-lg border border-neutral-200"> </div>`)} </div> </div>`} <div class="space-y-4"> <div id="image-urls" class="space-y-2"> <input type="url" name="image_url" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="https://ejemplo.com/imagen.jpg"> </div> <button type="button" onclick="addImageUrl()" class="text-sm text-neutral-600 hover:text-neutral-900">
+ Agregar URL
</button> <div class="border-t border-neutral-200 pt-4"> <label class="block text-sm font-medium text-neutral-700 mb-2">
o subir nuevos archivos
</label> <input type="file" name="image_file" multiple accept="image/*" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"> </div> </div> </div> <!-- Submit --> <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-200"> <a href="/admin/productos" class="px-6 py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors text-center">
Cancelar
</a> <button type="submit" class="flex-1 bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Guardar Cambios
</button> </div> </form> </div> ` })} ${renderScript($$result, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/productos/[id]/editar.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "NotificationScript", $$NotificationScript, {})}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/productos/[id]/editar.astro", void 0);
const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/productos/[id]/editar.astro";
const $$url = "/admin/productos/[id]/editar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Editar,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
