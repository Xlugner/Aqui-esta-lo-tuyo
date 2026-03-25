/* empty css               */
import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import './sequence_BUPkIzlm.mjs';
import 'clsx';
import { a as signOutAdmin } from './admin-auth_CO7OFhP7.mjs';

const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logout;
  await signOutAdmin(Astro2.cookies);
  return Astro2.redirect("/admin/login");
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/logout.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/admin/logout.astro";
const $$url = "/admin/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
