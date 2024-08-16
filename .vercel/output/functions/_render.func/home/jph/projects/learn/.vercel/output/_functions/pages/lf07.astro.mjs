import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DRqznRan.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_-MaIF3Ya.mjs';
import { $ as $$Layout } from '../chunks/Layout_DLu_-G2M.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lernfeldPosts = await getCollection("lf07");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lernfeld 07" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Lernfeld 07</h1> <ul>${lernfeldPosts.map((post) => renderTemplate`<li><a${addAttribute("lf07/post/" + post.data.title, "href")}>${post.data.title}</a></li>`)}</ul> ` })}`;
}, "/home/jph/projects/learn/src/pages/lf07/index.astro", void 0);

const $$file = "/home/jph/projects/learn/src/pages/lf07/index.astro";
const $$url = "/lf07";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
