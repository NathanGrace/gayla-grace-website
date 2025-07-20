import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.-w_ifUkO.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/1ItjhEQ3.js","_app/immutable/chunks/D0X4LPPP.js"];
export const stylesheets = [];
export const fonts = [];
