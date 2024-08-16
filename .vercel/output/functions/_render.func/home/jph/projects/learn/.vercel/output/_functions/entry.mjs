import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_dY_Vfy8s.mjs';
import { manifest } from './manifest_DrEO-Riw.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/lf07/post/_slug_.astro.mjs');
const _page2 = () => import('./pages/lf07.astro.mjs');
const _page3 = () => import('./pages/lf08/post/_slug_.astro.mjs');
const _page4 = () => import('./pages/lf08.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/lf07/post/[slug].astro", _page1],
    ["src/pages/lf07/index.astro", _page2],
    ["src/pages/lf08/post/[slug].astro", _page3],
    ["src/pages/lf08/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "711789fe-d4ec-4c44-b46d-054d1eacec96",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
