import { c as createComponent } from './astro-component_D3Ic-nKB.mjs';
import 'piccolore';
import './sequence_B6kYL9KL.mjs';
import 'clsx';
import { a as signOutAdmin } from './admin-auth_HFCdXdjY.mjs';

const prerender = false;
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
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
