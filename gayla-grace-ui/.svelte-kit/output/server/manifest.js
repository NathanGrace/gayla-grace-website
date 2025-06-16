export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/book-covers/book-cover1-unwrapping-the-gift-of-stepfamily-peace.jpg","assets/book-covers/book-cover2-quiet-moments-for-the-stepmom-soul.jpg","assets/book-covers/book-cover3-step-parenting-with-grace.jpeg","assets/book-covers/book-cover4-beautifully-blended.jpg","assets/family/family-pic-wedding.jpg","assets/family/family-pic.jpg","assets/fillers/book-filler-image.jpg","assets/free-resources/SteppingWithPurposeFreeEbookParenting.pdf","assets/gayla-grace-headshot-pic.jpg","assets/gayla-grace-hero-cropped.jpg","assets/gayla-grace-hero-image.jpeg","assets/gayla-grace-logo-tangerine-font.png","assets/gayla-grace-rocking-chair-image.jpg","assets/headshot-favicon.jpg","assets/speaking/christian-women-speakers-logo.jpeg","assets/speaking/speaking-image-1.jpg","assets/speaking/speaking-image-2.jpg","assets/speaking/speaking-panel.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B8rhnh4m.js",app:"_app/immutable/entry/app.oFtiBeHT.js",imports:["_app/immutable/entry/start.B8rhnh4m.js","_app/immutable/chunks/CVFY_mqm.js","_app/immutable/chunks/B9ZOWKL-.js","_app/immutable/chunks/DJ4bn_30.js","_app/immutable/entry/app.oFtiBeHT.js","_app/immutable/chunks/B9ZOWKL-.js","_app/immutable/chunks/C810wGTp.js","_app/immutable/chunks/D5J7uzp-.js","_app/immutable/chunks/DJ4bn_30.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/books",
				pattern: /^\/books\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/free-resources",
				pattern: /^\/free-resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/speaking",
				pattern: /^\/speaking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
