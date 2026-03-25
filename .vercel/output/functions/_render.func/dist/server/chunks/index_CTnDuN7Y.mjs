import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead, a2 as addAttribute } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_BvKCLPeq.mjs';
import { r as renderScript } from './script_8Lc7_j8H.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CF4daztq.mjs';
import { $ as $$NotificationScript } from './NotificationScript_aqGyLlsd.mjs';
import { g as getSupabaseServer } from './admin-auth_HFCdXdjY.mjs';
import { h as getHeroSection, b as uploadFile, e as getPublicUrl, i as updateHeroSection } from './supabase_BFkBUlFH.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = getSupabaseServer(Astro2.cookies);
  const heroSection = await getHeroSection(supabase);
  const existingImages = heroSection?.images || [];
  let successMessage;
  let errorMessage;
  if (Astro2.request.method === "POST") {
    console.log("=== DEBUG: Hero POST Request ===");
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    console.log("Action:", action);
    if (action === "update") {
      const imageUrls = formData.getAll("image_url");
      const altTexts = formData.getAll("alt_text");
      const imageFiles = formData.getAll("image_file");
      console.log("=== DEBUG: Hero Images ===");
      console.log("URLs:", imageUrls);
      console.log("Alt texts:", altTexts);
      console.log("Raw files from formData:", imageFiles);
      console.log("Files type check:", imageFiles.map((f) => typeof f));
      console.log("Files constructor:", imageFiles.map((f) => f?.constructor?.name));
      console.log("Files details:", imageFiles.map((f) => ({
        name: f?.name,
        size: f?.size,
        type: f?.type,
        isFile: f instanceof File
      })));
      const images = [];
      for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i]?.trim();
        if (url) {
          console.log(`Procesando URL ${i}:`, url);
          images.push({
            image_url: url,
            alt_text: altTexts[i]?.trim() || "",
            order_index: i,
            active: true
          });
        }
      }
      console.log("Cantidad de archivos:", imageFiles.length);
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        console.log(`Archivo ${i}:`, {
          name: file?.name,
          size: file?.size,
          type: file?.type,
          isFile: file instanceof File
        });
        if (file && file instanceof File && file.size > 0) {
          console.log("✅ Archivo válido, procesando:", file.name);
          const fileName = `${Date.now()}-${file.name}`;
          const path = `hero/${fileName}`;
          console.log("Intentando uploadFile con bucket: store, path:", path);
          const uploadedPath = await uploadFile("store", path, file, supabase);
          console.log("Resultado uploadFile (hero):", uploadedPath);
          if (uploadedPath) {
            const publicUrl = getPublicUrl("store", uploadedPath, supabase);
            console.log("URL pública (hero):", publicUrl);
            images.push({
              image_url: publicUrl,
              alt_text: altTexts[i]?.trim() || "",
              order_index: imageUrls.length + i,
              active: true
            });
          } else {
            console.error("❌ Error: uploadFile retornó null");
          }
        } else {
          console.log(`❌ Archivo ${i} inválido o vacío:`, {
            exists: !!file,
            isFile: file instanceof File,
            size: file?.size,
            name: file?.name
          });
        }
      }
      console.log("Imágenes finales para guardar:", images);
      console.log("Cantidad de imágenes:", images.length);
      if (images.length > 0) {
        console.log("Llamando a updateHeroSection...");
        const result = await updateHeroSection(images, supabase);
        console.log("Resultado updateHeroSection:", result);
        if (result.length > 0) {
          successMessage = "Imágenes actualizadas correctamente";
          console.log("SUCCESS: Imágenes guardadas");
        } else {
          errorMessage = "Error al actualizar las imágenes";
          console.error("ERROR: updateHeroSection retornó array vacío");
        }
      } else {
        errorMessage = "No se proporcionaron imágenes válidas";
        console.error("ERROR: No hay imágenes para guardar");
      }
    } else if (action === "delete") {
      const imageId = formData.get("image_id")?.toString();
      console.log("=== DEBUG: Delete Hero Image ===");
      console.log("Image ID to delete:", imageId);
      if (imageId) {
        const { error } = await supabase.from("hero_images").delete().eq("id", imageId);
        if (error) {
          console.error("Error deleting hero image:", error);
          errorMessage = "Error al eliminar la imagen";
        } else {
          console.log("Hero image deleted successfully");
          successMessage = "Imagen eliminada correctamente";
        }
      } else {
        errorMessage = "No se proporcionó ID de imagen";
      }
    } else {
      console.error("ERROR: Action desconocido:", action);
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Hero Section", "currentPath": "/admin/hero" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-neutral-800 mb-6">Imágenes del Hero</h1> ${successMessage && renderTemplate`<div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${successMessage}</p> </div>`}${errorMessage && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${errorMessage}</p> </div>`}<div class="bg-white rounded-lg shadow p-6"> <p class="text-neutral-600 mb-6">
Gestiona las imágenes que aparecen en el carrusel de la página principal.
</p> <form method="POST" id="hero-form" class="space-y-6" enctype="multipart/form-data" data-notifications="true"> <input type="hidden" name="action" value="update"> <div id="images-container" class="space-y-4"> ${existingImages.map((img, index) => renderTemplate`<div class="image-item border border-neutral-200 rounded-lg p-4"> <div class="flex items-start gap-4"> <div class="w-24 h-24 bg-neutral-100 rounded overflow-hidden flex-shrink-0"> <img${addAttribute(img.image_url, "src")}${addAttribute(img.alt_text || "", "alt")} class="w-full h-full object-cover"> </div> <div class="flex-1 space-y-3"> <div> <label class="block text-sm font-medium text-neutral-700 mb-1">URL de imagen</label> <input type="url" name="image_url"${addAttribute(img.image_url, "value")} class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="https://ejemplo.com/imagen.jpg"> </div> <div> <label class="block text-sm font-medium text-neutral-700 mb-1">Texto alternativo</label> <input type="text" name="alt_text"${addAttribute(img.alt_text || "", "value")} class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent" placeholder="Descripción de la imagen"> </div> </div> <button type="button"${addAttribute(`deleteImage('${img.id}')`, "onclick")} class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </div> </div>`)} </div> <div class="border-t border-neutral-200 pt-6"> <h3 class="text-lg font-medium text-neutral-800 mb-4">Agregar nuevas imágenes</h3> <div class="space-y-4"> <div class="border border-neutral-200 rounded-lg p-4"> <h4 class="text-sm font-medium text-neutral-700 mb-3">Opción 1: Subir archivos desde tu dispositivo</h4> <input type="file" name="image_file" multiple accept="image/*" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent"> <p class="text-xs text-neutral-500 mt-2">Puedes seleccionar múltiples imágenes a la vez</p> </div> <div class="border border-neutral-200 rounded-lg p-4"> <h4 class="text-sm font-medium text-neutral-700 mb-3">Opción 2: Agregar URLs manualmente</h4> <button type="button" onclick="addImage()" class="flex items-center gap-2 text-neutral-600 hover:text-neutral-900"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg>
Agregar imagen por URL
</button> </div> </div> </div> <div class="flex gap-4 pt-6 border-t border-neutral-200"> <button type="submit" class="bg-neutral-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Guardar Cambios
</button> </div> </form> </div> ` })} ${renderScript($$result, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/hero/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "NotificationScript", $$NotificationScript, {})}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/hero/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/hero/index.astro";
const $$url = "/admin/hero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
