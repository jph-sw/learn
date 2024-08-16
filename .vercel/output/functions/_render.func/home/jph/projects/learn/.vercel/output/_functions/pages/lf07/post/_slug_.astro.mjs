import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_DRqznRan.mjs';
import 'kleur/colors';
import { g as getEntry } from '../../../chunks/_astro_content_-MaIF3Ya.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_DLu_-G2M.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("lf07", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>lf07/${entry.data.title}</h2> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/jph/projects/learn/src/pages/lf07/post/[slug].astro", void 0);

const $$file = "/home/jph/projects/learn/src/pages/lf07/post/[slug].astro";
const $$url = "/lf07/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
