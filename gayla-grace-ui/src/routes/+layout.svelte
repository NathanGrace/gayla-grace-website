<script lang="ts">
    import '../app.css';

    let { children } = $props();
</script>

<head>
    <title>Gayla Grace</title>
    <!-- There's already a head tag in the app.html, might need to put stuff there instead! -->
</head>

<header>
    <nav class="daisy-navbar bg-base-300 fixed top-0 left-0 right-0 z-50">

        <div class="daisy-navbar-start flex justify-start items-center">
            <div class="daisy-dropdown">
                <div tabindex="0" role="button" class="daisy-btn daisy-btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul class="daisy-menu daisy-menu-xl daisy-dropdown-content text-base-200 bg-accent rounded-box z-1 mt-3 w-76 p-2 shadow">
                    <li><a href="./">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/speaking">Speaking</a></li>
                    <li>
                        <ul class="p-2">
                            <li><a data-sveltekit-reload href="/speaking#topics" class="">Topics</a></li>
                            <li><a data-sveltekit-reload href="/speaking#testimonials" class="">Testimonials</a></li>
                            <li><a data-sveltekit-reload href="/speaking#events" class="">Events</a></li>
                        </ul>
                    </li>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/media">Media</a></li>
                    <li>
                        <ul class="p-2">
                            <li><a data-sveltekit-reload href="/media#podcast" class="">Podcast</a></li>
                            <li><a data-sveltekit-reload href="/media#featured-presentation" class="">Featured Presentation</a></li>
                            <li><a data-sveltekit-reload href="/media#video-interviews" class="">Video Interviews</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            </div>
            <a href="./" class="daisy-btn daisy-btn-ghost flex-shrink-0 flex-grow-0 max-w-fit min-w-24 sm:min-w-36 lg:min-w-44 xl:min-w-52 h-12 sm:h-16 lg:h-20 xl:h-24 p-2">
                <img
                        src="/assets/gayla-grace-logo-tangerine-font.png"
                        alt="Gayla Grace Logo"
                        class="h-full object-contain"
                />
            </a>
        </div>

        <!-- This one gets displayed on big screens -->
        <div class="daisy-navbar-center hidden lg:flex">
            <ul class="daisy-menu daisy-menu-horizontal daisy-menu-xl px-1">
                <li><a href="./">Home</a></li>
                <li><a href="/about">About</a></li>
                <li class="group relative">
                    <a href="/speaking">
                        Speaking
                        <svg class="w-4 h-4 inline-block ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <ul class="absolute top-full left-0 bg-accent text-base-200 rounded-box shadow-lg p-2 w-50 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li><a data-sveltekit-reload href="/speaking#topics" class="block px-4 py-2 hover:bg-secondary rounded">Topics</a></li>
                        <li><a data-sveltekit-reload href="/speaking#testimonials" class="block px-4 py-2 hover:bg-secondary rounded">Testimonials</a></li>
                        <li><a data-sveltekit-reload href="/speaking#events" class="block px-4 py-2 hover:bg-secondary rounded">Events</a></li>
                    </ul>
                </li>
                <li><a href="/books">Books</a></li>
                <li class="group relative">
                    <a href="/media">
                        Media
                        <svg class="w-4 h-4 inline-block ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    <ul class="absolute top-full left-0 bg-accent text-base-200 rounded-box shadow-lg p-2 w-64 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li><a data-sveltekit-reload href="/media#podcast" class="block px-4 py-2 hover:bg-secondary rounded">Podcast</a></li>
                        <li><a data-sveltekit-reload href="/media#featured-presentation" class="block px-4 py-2 hover:bg-secondary rounded">Featured Presentation</a></li>
                        <li><a data-sveltekit-reload href="/media#video-interviews" class="block px-4 py-2 hover:bg-secondary rounded">Video Interviews</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact Me</a></li>
            </ul>
        </div>

        <div class="daisy-navbar-end">
            <a data-sveltekit-reload href="./#beautifully-blended" class="daisy-btn daisy-btn-primary daisy-btn-sm sm:daisy-btn-md xl:daisy-btn-xl mr-2">My New Book!</a>
        </div>
    </nav>
</header>


<!-- Add padding to the body content to account for fixed navbar -->
<div class="pt-16 sm:pt-20 lg:pt-24 2xl:pt-28">
    {@render children()}
</div>

<footer class="footer p-10 bg-base-300">
    <div class="container mx-auto">
        <div class="border-t border-gray-700 mt-8 pt-4"></div>
        <!-- Mission Statement - Full width on mobile, first column on desktop -->
        <div class="text-center md:text-left mb-8 md:mb-0">
            <aside class="md:hidden">
                <h2 class="text-lg font-bold mb-4">Gayla Grace</h2>
                <p class="text-sm opacity-80 max-w-xs mx-auto leading-relaxed">
                    My mission is to equip and empower you in your marriage and family relationships with practical and faith-based tools that enable you to flourish.
                </p>
            </aside>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <!-- Company Info - Hidden on mobile, shown on desktop -->
            <aside class="hidden md:block text-center md:text-left">
                <h2 class="text-lg font-bold mb-4">Gayla Grace</h2>
                <p class="text-sm opacity-80 max-w-xs leading-relaxed">
                    My mission is to equip and empower those seeking support in family and marriage relationships with faith-based tools that enable them to flourish.
                </p>
            </aside>

            <!-- Quick Links -->
            <nav class="text-center md:text-left">
                <h6 class="footer-title text-lg font-bold mb-4 opacity-100">
                    Quick Links
                </h6>
                <div class="flex flex-col space-y-2">
                    <a href="./" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        Home
                    </a>
                    <a href="/about" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        About Me
                    </a>
                    <a href="/speaking" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        Speaking
                    </a>
                    <a href="/books" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        Books
                    </a>
                    <a href="/contact" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        Contact
                    </a>
                    <a href="/media" class="link link-hover text-sm opacity-80 hover:opacity-100">
                        Free Resources
                    </a>
                </div>
            </nav>

            <!-- Contact Info -->
            <nav class="text-center md:text-left">
                <h6 class="footer-title text-lg font-bold mb-4 opacity-100">
                    Socials & Contact
                </h6>
                <div class="text-sm opacity-80 space-y-2">
                    <p>gayla.grace@familylife.com</p>
                    <p>(501) 269-6861</p>

                    <!-- Social Links -->
                    <div class="flex gap-3 md:gap-4 mt-4 justify-center md:justify-start">
                        <!-- Facebook -->
                        <a href="https://www.facebook.com/GaylaGrace.author" class="daisy-btn daisy-btn-ghost daisy-btn-sm md:daisy-btn-md daisy-btn-circle hover:daisy-btn-primary" aria-label="Facebook">
                            <svg class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                />
                            </svg>
                        </a>
                        <!-- Instagram -->
                        <a href="https://www.instagram.com/gayla.grace/" class="daisy-btn daisy-btn-ghost daisy-btn-sm md:daisy-btn-md daisy-btn-circle hover:daisy-btn-primary" aria-label="Instagram">
                            <svg class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"
                                />
                            </svg>
                        </a>
                        <!-- YouTube -->
                        <a href="https://www.youtube.com/playlist?list=PLoZ3uqAYX8EE5-rlD9PMy1DFnEHBR8Wt7" class="daisy-btn daisy-btn-ghost daisy-btn-sm md:daisy-btn-md daisy-btn-circle hover:daisy-btn-primary" aria-label="Youtube">
                            <svg class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                />
                            </svg>
                        </a>
                        <!-- Pinterest -->
                        <a href="https://www.pinterest.com/gaylagrace/" class="daisy-btn daisy-btn-ghost daisy-btn-sm md:daisy-btn-md daisy-btn-circle hover:daisy-btn-primary" aria-label="Pinterest">
                            <svg class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                                <path
                                        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.096.119.112.219.083.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.990-5.367 11.990-11.987C24.007 5.367 18.641.001 12.017.001z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-4"></div>
        <div class="text-center">
            <p class="text-sm opacity-80">
                © 2025 Gayla Grace. All rights reserved.
            </p>
        </div>
    </div>
</footer>