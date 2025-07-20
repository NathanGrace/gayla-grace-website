

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BjUXqTW5.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/1ItjhEQ3.js","_app/immutable/chunks/D0X4LPPP.js"];
export const stylesheets = [];
export const fonts = [];
