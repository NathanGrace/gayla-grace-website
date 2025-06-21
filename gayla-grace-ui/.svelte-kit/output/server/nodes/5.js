import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D7XYO9-K.js","_app/immutable/chunks/CaNlpJ-p.js","_app/immutable/chunks/BsmKKBsJ.js","_app/immutable/chunks/CTzjOFvM.js"];
export const stylesheets = [];
export const fonts = [];
