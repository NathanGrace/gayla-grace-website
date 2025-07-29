export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/about/family-life-blended-logo.png","assets/about/gayla-grace-rocking-chair-image.jpg","assets/book-covers/book-cover1-unwrapping-the-gift-of-stepfamily-peace.jpg","assets/book-covers/book-cover2-quiet-moments-for-the-stepmom-soul.jpg","assets/book-covers/book-cover3-step-parenting-with-grace.jpeg","assets/book-covers/book-cover4-beautifully-blended.png","assets/family/family-pic-wedding.jpg","assets/family/family-pic.jpg","assets/fillers/book-filler-image.jpg","assets/fillers/film-tape-family-pic.png","assets/gayla-grace-headshot-pic.jpg","assets/gayla-grace-hero-cropped.jpg","assets/gayla-grace-hero-image.jpeg","assets/gayla-grace-logo-tangerine-font.png","assets/headshot-favicon.jpg","assets/media/podcast-graphic.png","assets/media/SteppingWithPurposeFreeEbookParenting.pdf","assets/speaking/christian-women-speakers-logo.jpeg","assets/speaking/christian-women-speakers-logo.png","assets/speaking/Gayla-Grace-2-crop.jpg","assets/speaking/speaking-header.png","assets/speaking/speaking-image-1.jpg","assets/speaking/speaking-image-2-blank.png","assets/speaking/speaking-image-2.jpg","assets/speaking/speaking-image-3.jpg","assets/speaking/speaking-image-4.jpg","assets/speaking/speaking-image-5.png","assets/speaking/speaking-image-mexico.jpeg","assets/speaking/speaking-panel.jpg","assets/testimonials/allison-hammett.png","assets/testimonials/dubs-byers.jpeg","assets/testimonials/gena-carter.jpeg","assets/testimonials/jan-mathews.jpg","assets/testimonials/janelle-nevels.jpeg","assets/testimonials/ron-deal.jpeg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.Ne4tXNav.js",app:"_app/immutable/entry/app.C-KoKwjf.js",imports:["_app/immutable/entry/start.Ne4tXNav.js","_app/immutable/chunks/zt4XknOF.js","_app/immutable/chunks/DX3hm894.js","_app/immutable/chunks/D0X4LPPP.js","_app/immutable/chunks/CpP06W66.js","_app/immutable/entry/app.C-KoKwjf.js","_app/immutable/chunks/D0X4LPPP.js","_app/immutable/chunks/DX3hm894.js","_app/immutable/chunks/CpP06W66.js","_app/immutable/chunks/CWj6FrbW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/books","/contact","/media","/speaking"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
