<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<head>
    <title>Gayla Grace</title>
    <!-- There's already a head tag in the app.html, might need to put stuff there instead! -->
</head>

<header>
    <nav class="daisy-navbar">
        <div class="daisy-navbar-start">
            <div class="daisy-dropdown">
                <div tabindex="0" role="button" class="daisy-btn daisy-btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                        class="daisy-menu daisy-menu-sm daisy-dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="/about">About</a></li>
<!--                    <li>-->
<!--                        <a>Parent</a>-->
<!--                        <ul class="p-2">-->
<!--                            <li><a>Submenu 1</a></li>-->
<!--                            <li><a>Submenu 2</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            </div>
            <a href="./" class="inline-flex">
                <img
                        src="/assets/gayla-grace-logo-tangerine-font.png"
                        alt="Gayla Grace Logo"
                        class="daisy-btn daisy-btn-lg daisy-btn-ghost min-w-44"
                />
            </a>
        </div>

        <!-- This gets displayed on big screens -->
        <div class="daisy-navbar-center hidden lg:flex">
            <ul class="daisy-menu daisy-menu-horizontal px-1">
                <li><a href="/about">About</a></li>
<!--                <li>-->
<!--                    <details>-->
<!--                        <summary>Parent</summary>-->
<!--                        <ul class="p-2">-->
<!--                            <li><a>Submenu 1</a></li>-->
<!--                            <li><a>Submenu 2</a></li>-->
<!--                        </ul>-->
<!--                    </details>-->
<!--                </li>-->
                <li><a href="/contact">Contact Me</a></li>
            </ul>
        </div>


        <div class="daisy-navbar-end">
            <a data-sveltekit-reload href="./#beautifully-blended" class="daisy-btn daisy-btn-primary">My New Book!</a>
        </div>
    </nav>
</header>


{@render children()}
