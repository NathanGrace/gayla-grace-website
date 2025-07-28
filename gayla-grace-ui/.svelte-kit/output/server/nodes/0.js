import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DJK80CRe.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D0X4LPPP.js","_app/immutable/chunks/CpP06W66.js"];
export const stylesheets = ["_app/immutable/assets/0.CHRaZ61T.css"];
export const fonts = [];
