

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D2BgwbGz.js","_app/immutable/chunks/D5J7uzp-.js","_app/immutable/chunks/B9ZOWKL-.js","_app/immutable/chunks/CeH4aLRe.js"];
export const stylesheets = [];
export const fonts = [];
