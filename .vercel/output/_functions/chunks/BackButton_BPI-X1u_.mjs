import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, b9 as defineScriptVars, L as maybeRenderHead } from './sequence_BUPkIzlm.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BackButton;
  const { fallbackUrl = "/" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button onclick="history.back()" class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"> <svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> <span class="font-medium">Volver</span> </button> <script>(function(){', '\n  const backButton = document.querySelector(\'button[onclick="history.back()"]\');\n  if (backButton && (!window.history.length || window.history.length === 1)) {\n    backButton.setAttribute("onclick", `window.location.href="${fallbackUrl}"`);\n  }\n})();<\/script>'], ["", '<button onclick="history.back()" class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"> <svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> <span class="font-medium">Volver</span> </button> <script>(function(){', '\n  const backButton = document.querySelector(\'button[onclick="history.back()"]\');\n  if (backButton && (!window.history.length || window.history.length === 1)) {\n    backButton.setAttribute("onclick", \\`window.location.href="\\${fallbackUrl}"\\`);\n  }\n})();<\/script>'])), maybeRenderHead(), defineScriptVars({ fallbackUrl }));
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/astro/BackButton.astro", void 0);

export { $$BackButton as $ };
