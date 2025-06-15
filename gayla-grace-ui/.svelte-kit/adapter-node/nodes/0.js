

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BBudj_QS.js","_app/immutable/chunks/D5J7uzp-.js","_app/immutable/chunks/B9ZOWKL-.js"];
export const stylesheets = ["_app/immutable/assets/0.D7zVClIE.css"];
export const fonts = [];
