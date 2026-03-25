import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_Hdn9W_io.mjs';
import { $ as $$Layout } from './Layout_DxmlB7o_.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-16"> <div class="max-w-2xl mx-auto text-center"> <h1 class="text-4xl font-bold text-neutral-800 mb-4">Contáctanos</h1> <p class="text-neutral-600 mb-12">
¿Tienes alguna pregunta o comentario? Rellena el formulario y nos
        pondremos en contacto contigo.
</p> </div> <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"> <form action="#" method="POST" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-neutral-700">Nombre</label> <div class="mt-1"> <input type="text" name="name" id="name" autocomplete="name" required class="block w-full border-neutral-400 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"> </div> </div> <div> <label for="email" class="block text-sm font-medium text-neutral-700">Correo Electrónico</label> <div class="mt-1"> <input id="email" name="email" type="email" autocomplete="email" required class="block w-full border-neutral-600 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"> </div> </div> <div> <label for="message" class="block text-sm font-medium text-neutral-700">Mensaje</label> <div class="mt-1"> <textarea id="message" name="message" rows="4" required class="block w-full border-gray-700 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"></textarea> </div> </div> <div> <button type="submit" class="w-full flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 transition-colors">
Enviar Mensaje
</button> </div> </form> </div> </div> ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/contacto.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
