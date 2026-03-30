import { c as createComponent } from './astro-component_D3Ic-nKB.mjs';
import 'piccolore';
import { B as maybeRenderHead, a3 as addAttribute, Q as renderTemplate, F as Fragment } from './sequence_B6kYL9KL.mjs';
import { r as renderComponent } from './server_Dp61SpIq.mjs';
import { $ as $$Layout } from './Layout_4Mlt5I1h.mjs';
import 'clsx';
import { r as renderScript } from './script_BRfdXIpO.mjs';
import { h as getHeroSection, q as getSupabaseImage, r as getFeaturedProducts, a as getStoreConfig } from './supabase_XKs3TGPF.mjs';
import { $ as $$ProductCard } from './ProductCard_L_WSvtjG.mjs';

const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const heroData = await getHeroSection();
  const images = heroData?.images ?? [];
  return renderTemplate`${images.length > 0 && renderTemplate`${maybeRenderHead()}<section id="hero-carousel" class="relative w-full h-64 md:h-96 overflow-hidden"><div class="relative h-full">${images.map((img, index) => renderTemplate`<div class="carousel-item absolute w-full h-full transition-opacity duration-700 ease-in-out"${addAttribute(index, "data-index")}><img${addAttribute(getSupabaseImage(img.image_url), "src")}${addAttribute(img.alt_text || `Slide ${index + 1}`, "alt")} class="w-full h-full object-cover"></div>`)}</div><button class="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-neutral-900/75 focus:outline-none transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-neutral-900/75 focus:outline-none transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button><div class="carousel-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">${images.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-colors"${addAttribute(index, "data-index")}></button>`)}</div></section>`}${renderScript($$result, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/HeroSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/HeroSection.astro", void 0);

const $$FeaturedProducts = createComponent(async ($$result, $$props, $$slots) => {
  const featuredProducts = await getFeaturedProducts();
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-astro-cid-zrpl5w7t> <div class="text-center mb-12" data-astro-cid-zrpl5w7t> <h2 class="text-3xl font-bold text-neutral-800 mb-4" data-astro-cid-zrpl5w7t>
Productos Destacados
</h2> <p class="text-neutral-700" data-astro-cid-zrpl5w7t>Los más populares de nuestra colección</p> </div> ${featuredProducts && featuredProducts.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-zrpl5w7t": true }, { "default": async ($$result2) => renderTemplate`<div class="overflow-x-auto scrollbar-hide pb-4" data-astro-cid-zrpl5w7t> <div class="flex gap-6 min-w-min px-2" data-astro-cid-zrpl5w7t> ${featuredProducts.map((product) => renderTemplate`<div class="flex-none w-[280px] sm:w-[300px]" data-astro-cid-zrpl5w7t> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-zrpl5w7t": true })} </div>`)} </div> </div> <div class="flex justify-center mt-12" data-astro-cid-zrpl5w7t> <a href="/productos" class="px-6 py-2 text-sm sm:text-base font-medium text-neutral-700 border border-neutral-300 rounded-lg hover:border-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-200" data-astro-cid-zrpl5w7t>
Ver todos los productos
</a> </div> ` })}` : renderTemplate`<div class="text-center py-12" data-astro-cid-zrpl5w7t> <p class="text-neutral-500 text-lg" data-astro-cid-zrpl5w7t>
No hay productos destacados disponibles.
</p> <p class="text-neutral-400 mt-2" data-astro-cid-zrpl5w7t>
Configura productos como "destacados" en el panel de administración.
</p> </div>`} </section>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/FeaturedProducts.astro", void 0);

const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const storeConfig = await getStoreConfig();
  const whatsappNumber = storeConfig?.whatsapp_number || "34123456789";
  return renderTemplate`${maybeRenderHead()}<section class="bg-neutral-100 py-16"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-neutral-900 mb-4">¿Necesitas ayuda?</h2> <p class="text-neutral-700 mb-8">
Contáctanos por WhatsApp y te atenderemos personalmente
</p> <a${addAttribute(`https://wa.me/${whatsappNumber}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-neutral-900 font-bold py-3 px-8 rounded-lg transition-colors"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg>
Contactar por WhatsApp
</a> </div> </section>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/CallToAction.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$HeroSection, {})}  ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, {})}  ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/index.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
