

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BmT8wuEM.js","_app/immutable/chunks/D5J7uzp-.js","_app/immutable/chunks/B9ZOWKL-.js","_app/immutable/chunks/CeH4aLRe.js"];
export const stylesheets = [];
export const fonts = [];
