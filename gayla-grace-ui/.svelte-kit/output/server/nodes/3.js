

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BBjDPzST.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/1ItjhEQ3.js","_app/immutable/chunks/D0X4LPPP.js"];
export const stylesheets = [];
export const fonts = [];
