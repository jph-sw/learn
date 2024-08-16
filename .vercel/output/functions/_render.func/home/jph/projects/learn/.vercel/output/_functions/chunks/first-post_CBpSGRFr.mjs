import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DRqznRan.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"test\">test</h1>";

				const frontmatter = {"title":"test-post"};
				const file = "/home/jph/projects/learn/src/content/lf10/first-post.md";
				const url = undefined;
				function rawContent() {
					return "\n# test\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"test","text":"test"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
