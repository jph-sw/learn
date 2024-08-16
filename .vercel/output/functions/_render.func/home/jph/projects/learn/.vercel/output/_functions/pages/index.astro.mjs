import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DRqznRan.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DLu_-G2M.mjs';
export { renderers } from '../renderers.mjs';

const lernfelder = [
  { title: "Lernfeld 07", href: "/lf07" },
  { title: "Lernfeld 08", href: "/lf08" }
];
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "learn" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>learn</h1> <p>hier speichere ich meine schulsachen</p> <ul class="folders">${lernfelder.map((lernfeld) => renderTemplate`<li><a${addAttribute(lernfeld.href, "href")}>${lernfeld.title}</a></li>`)}</ul> </main> ` })}`;
}, "/home/jph/projects/learn/src/pages/index.astro", void 0);

const $$file = "/home/jph/projects/learn/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	lernfelder,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
