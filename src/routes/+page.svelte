<script lang="ts">
	import { onMount } from 'svelte';
    onMount(() => {
        // Any necessary onMount logic can go here
    });
</script>

<svelte:head>
	<title>Bloc - A predictable state management library for Dart</title>
	<meta name="description" content="Bloc is a predictable state management library for Dart." />
	<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>

<main class="h-screen text-white flex flex-col justify-center items-center p-8">
    <div class="max-w-5xl w-full">
        <div class="flex justify-between items-center mb-12">
            <div>
                <div class="flex items-center mb-2">
									<h1 class="text-6xl font-bold mb-2">Steve Tom</h1>
									<span class="text-xs pb-10 opacity-50 font-thin">v8.1.4</span>
								</div>
                <p class="text-xl mb-6">A predictable state management library for Dart.</p>
                <div class="flex space-x-4">
                    <a href="#" class="bg-teal-400 text-gray-900 px-6 py-2 rounded-full hover:bg-teal-300 transition duration-300">
                        Get Started
                    </a>
                    <a href="#" class="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                        View on GitHub
                    </a>
                </div>
            </div>
            <div class="w-96 h-96 relative">
							<!-- Gradient behind the image  -->
								<section class="z-0 radial-gradient"></section>
                <img class="z-10 user-image" src="/steve-tom-half-image.png" alt="Bloc logo" />
            </div>
        </div>
        
        <div class="mt-16">
            <p class="text-center mb-4">Sponsored with 💖 by</p>
            <div class="flex justify-center space-x-8">
                <!-- Replace these divs with actual sponsor logos or names -->
                <div class="w-24 h-8 bg-gray-600 rounded"></div>
                <div class="w-24 h-8 bg-gray-600 rounded"></div>
                <div class="w-24 h-8 bg-gray-600 rounded"></div>
                <div class="w-24 h-8 bg-gray-600 rounded"></div>
                <div class="w-24 h-8 bg-gray-600 rounded"></div>
            </div>
        </div>
    </div>
</main>

<style>
    .radial-gradient {
				top: 0;
				left: 0;
				width: 300px;
				height: 300px;
				background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
				/* Blur */
				filter: blur(100px);
				z-index: 700;
		}
		.user-image {
				border-radius: 50%;
				z-index: 800;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

		}
</style>