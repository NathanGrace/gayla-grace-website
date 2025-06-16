import "clsx";
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<head><title>Gayla Grace</title></head> <header><nav class="daisy-navbar"><div class="daisy-navbar-start"><div class="daisy-dropdown"><div tabindex="0" role="button" class="daisy-btn daisy-btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div></div> <a href="./" class="inline-flex"><img src="/assets/gayla-grace-logo-tangerine-font.png" alt="Gayla Grace Logo" class="daisy-btn daisy-btn-lg daisy-btn-ghost min-w-44"/></a></div> <div class="daisy-navbar-center hidden lg:flex"><ul class="daisy-menu daisy-menu-horizontal px-1"><li><a href="/about">About</a></li>     <li><a href="/contact">Contact Me</a></li></ul></div> <div class="daisy-navbar-end"><a data-sveltekit-reload="" href="./#beautifully-blended" class="daisy-btn daisy-btn-primary">My New Book!</a></div></nav></header> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
