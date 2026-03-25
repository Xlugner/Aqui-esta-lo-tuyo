/* empty css               */
import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { b7 as renderHead, K as renderTemplate } from './sequence_BUPkIzlm.mjs';
import 'clsx';
import { s as signInAdmin } from './admin-auth_CO7OFhP7.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  let loginError;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const result = await signInAdmin(email, password, Astro2.cookies);
    if (result.success) {
      return Astro2.redirect("/admin");
    }
    loginError = result.error;
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Iniciar Sesión | Admin</title>${renderHead()}</head> <body class="bg-gray-100 min-h-screen flex items-center justify-center"> <div class="w-full max-w-md"> <!-- Logo/Header --> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-neutral-800">Panel Admin</h1> <p class="text-neutral-500 mt-2">Inicia sesión para continuar</p> </div> <!-- Login Form --> <div class="bg-white rounded-lg shadow-md p-8"> ${loginError && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"> <p class="text-sm font-medium">${loginError}</p> </div>`} <form method="POST" class="space-y-6"> <!-- Email --> <div> <label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
Correo electrónico
</label> <input type="email" id="email" name="email" required autocomplete="email" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors" placeholder="admin@tienda.com"> </div> <!-- Password --> <div> <label for="password" class="block text-sm font-medium text-neutral-700 mb-2">
Contraseña
</label> <input type="password" id="password" name="password" required autocomplete="current-password" class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-colors" placeholder="••••••••"> </div> <!-- Submit --> <button type="submit" class="w-full bg-neutral-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
Iniciar Sesión
</button> </form> <!-- Back to store --> <div class="mt-6 text-center"> <a href="/" class="text-sm text-neutral-500 hover:text-neutral-700">
← Volver a la tienda
</a> </div> </div> </div> </body></html>`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/login.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
