export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/book-covers/book-cover1-unwrapping-the-gift-of-stepfamily-peace.jpg","assets/book-covers/book-cover2-quiet-moments-for-the-stepmom-soul.jpg","assets/book-covers/book-cover3-step-parenting-with-grace.jpeg","assets/book-covers/book-cover4-beautifully-blended.png","assets/family/family-pic-wedding.jpg","assets/family/family-pic.jpg","assets/fillers/book-filler-image.jpg","assets/fillers/film-tape-family-pic.png","assets/free-resources/SteppingWithPurposeFreeEbookParenting.pdf","assets/gayla-grace-headshot-pic.jpg","assets/gayla-grace-hero-cropped.jpg","assets/gayla-grace-hero-image.jpeg","assets/gayla-grace-logo-tangerine-font.png","assets/gayla-grace-rocking-chair-image.jpg","assets/headshot-favicon.jpg","assets/speaking/christian-women-speakers-logo.jpeg","assets/speaking/christian-women-speakers-logo.png","assets/speaking/speaking-image-1.jpg","assets/speaking/speaking-image-2.jpg","assets/speaking/speaking-image-3.jpg","assets/speaking/speaking-image-4.jpg","assets/speaking/speaking-image-5.png","assets/speaking/speaking-image-mexico.jpeg","assets/speaking/speaking-panel.jpg","assets/testimonials/allison-hammett.png","assets/testimonials/dubs-byers.jpeg","assets/testimonials/gena-carter.jpeg","assets/testimonials/jan-mathews.jpg","assets/testimonials/janelle-nevels.jpeg","assets/testimonials/ron-deal.jpeg"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.CHMSSq5Z.js",app:"_app/immutable/entry/app.B8M36Pvu.js",imports:["_app/immutable/entry/start.CHMSSq5Z.js","_app/immutable/chunks/DjDuzxJc.js","_app/immutable/chunks/BsmKKBsJ.js","_app/immutable/chunks/C474LgGJ.js","_app/immutable/entry/app.B8M36Pvu.js","_app/immutable/chunks/BsmKKBsJ.js","_app/immutable/chunks/C5_WzYVm.js","_app/immutable/chunks/CaNlpJ-p.js","_app/immutable/chunks/C474LgGJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/books","/contact","/free-resources","/speaking"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
