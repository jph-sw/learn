import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DRqznRan.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"first-post\">first post</h1>";

				const frontmatter = {"title":"first-post"};
				const file = "/home/jph/projects/learn/src/content/lf08/first-post.md";
				const url = undefined;
				function rawContent() {
					return "\n# first post\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"first-post","text":"first post"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
