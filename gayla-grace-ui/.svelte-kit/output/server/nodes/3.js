

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DQhflpq2.js","_app/immutable/chunks/CaNlpJ-p.js","_app/immutable/chunks/BsmKKBsJ.js","_app/immutable/chunks/CTzjOFvM.js"];
export const stylesheets = [];
export const fonts = [];
