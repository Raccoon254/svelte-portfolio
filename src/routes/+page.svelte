<script lang="ts">
	import { onMount } from 'svelte';
	import Projects from './components/Projects.svelte';
	import Contact from './components/Contact.svelte';
    onMount(() => {
        // Any necessary onMount logic can go here
    });

		interface Skill {
				name: string;
				color: string;
		}
		let skills:Skill[] = [
        { name: 'javascript', color: 'yellow' },
        { name: 'python', color: 'blue' },
        { name: 'react', color: 'cyan' },
        { name: 'nodejs', color: 'green' },
        { name: 'java', color: 'red' },
        { name: 'php', color: 'purple' },
        { name: 'css3', color: 'blue' },
        { name: 'html5', color: 'orange' },
        { name: 'git', color: 'red' },
        { name: 'mongodb', color: 'green' },
        { name: 'postgresql', color: 'blue' },
        { name: 'docker', color: 'blue' },
        { name: 'linux', color: 'yellow' },
        { name: 'typescript', color: 'blue' },
        { name: 'svelte', color: 'red' },
    ];

    // Duplicate skills to ensure smooth looping
    skills = [...skills, ...skills];

    let scrollBar: HTMLElement;

    onMount(() => {
        scrollBar.addEventListener('mouseenter', () => {
            scrollBar.style.animationPlayState = 'paused';
        });
        scrollBar.addEventListener('mouseleave', () => {
            scrollBar.style.animationPlayState = 'running';
        });
    });

</script>

<svelte:head>
    <title>Steve Tom | Applied Computer Science Student & Self-Taught Developer</title>
    <meta name="description" content="Steve Tom alias Raccoon254 - Graduate from Chuka University, specializing in Applied Computer Science. Experienced in YouTube, online courses, computer engineering, networking, Python, PHP, JavaScript, and Kotlin for Android Studio." />
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</svelte:head>

<main class="min-h-screen text-white flex flex-col justify-center items-center p-8">
    <div class="max-w-5xl mt-8 w-full">
        <div class="flex flex-col gap-3 md:flex-row justify-between items-center mb-12">
            <div class="md:w-1/2">
                <div data-aos="zoom-in" class="flex gap-2 items-center h-16 overflow-clip mb-2">
									<img src="/logo-light.png" alt="Steve Tom" class="w-10 object-cover" />
									<h1 class="text-3xl font-bold">kenTom</h1>
									<span class="text-xs pl-1 pb-10 opacity-50 font-thin">v8.1.4</span>
								</div>
                <p data-aos="fade-left" class="text-xl font-thin mb-6">
									I am an indie developer with a passion for programming and technology. I am skilled in Java, Rust, JavaScript and many other programming languages. 
								</p>
                <div class="flex space-x-4">
                    <a data-aos="fade-right" href="#contact" class="bg-gray-50 text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300 ring-1 ring-offset-2 ring-offset-dark ring-green-400 gap-2 center">
											<i class="fas fa-envelope"></i>
												Hire Me
                    </a>
                    <a data-aos="fade-left" href="https://github.com/Raccoon254" target="_blank" rel="noopener"
										 class="bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 center transition duration-300 ring-1 ring-offset-2 ring-offset-dark gap-2 ring-green-400">
											<i class="devicon-github-original"></i>
                        GitHub
                    </a>
                </div>
            </div>
            <div data-aos="fade-up" class="w-96 h-96 md:w-[30rem] rotate-2 center relative">
							<!-- Gradient behind the image  -->
								<section class="z-0 radial-gradient"></section>
                <img class="z-10 user-image" src="/steve-tom-half-image.png" alt="Bloc logo" />
            </div>
        </div>
        
				<div class="mt-16 md:mt-32">
					<div class="skills-scroll-container relative">
						<div class="end-l bg-gradient-to-r from-dark to-transparent absolute top-1/2 -translate-y-1/2 left-0"></div>
							<div class="skills-scroll py-8" bind:this={scrollBar}>
									{#each skills as skill}
											<div
											data-tip={skill.name}
											 class="skill-item text-2xl mr-3 p-4 tooltip cursor-pointer rounded-lg border border-gray-400 border-opacity-40 ring-1 ring-offset-2 ring-offset-black ring-white ring-opacity-10 hover:scale-105 transition-all" style="color: {skill.color}">
													<i class={"devicon-" + skill.name + "-plain"}></i>
											</div>
									{/each}
							</div>
							<div class="end-r bg-gradient-to-l from-dark to-transparent  absolute top-1/2 -translate-y-1/2 right-0"></div>
					</div>
			</div>

			<div>
				<Projects />
			</div>

			<div>
				<Contact />
			</div>

    </div>
</main>

<style>
    .radial-gradient {
				width: 300px;
				height: 300px;
				background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%);
				/* Blur */
				filter: blur(100px);
				z-index: 700;
				animation: wobble 5s infinite;
		}
		.user-image {
				border-radius: 50%;
				z-index: 800;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
		}
		@keyframes wobble { 
            0% { transform: translateX(0%); } 
            15% { transform: translateY(-25%) rotate(-5deg); } 
            30% { transform: translateX(20%) rotate(3deg); } 
            45% { transform: translateX(-15%) rotate(-3deg); } 
            60% { transform: translateX(10%) rotate(2deg); } 
            75% { transform: translateX(-5%) rotate(-1deg); } 
            100% { transform: translateX(0%); } 
         }
	.skills-scroll-container {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
    }

    .skills-scroll {
        display: inline-block;
        animation: scroll 40s linear infinite;
    }

    .skill-item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

		.end-l {
				z-index: 1000;
				width: 100px;
				height: 49%;
		}

		.end-r {
				z-index: 1000;	
				width: 100px;
				height: 49%;
		}

    .radial-gradient {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%);
        filter: blur(300px);
        z-index: 700;
        animation: wobble 5s infinite;
    }

    .user-image {
        border-radius: 50%;
        z-index: 800;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes wobble { 
        0% { transform: translateX(0%); } 
        15% { transform: translateY(-25%) rotate(-5deg); } 
        30% { transform: translateX(20%) rotate(3deg); } 
        45% { transform: translateX(-15%) rotate(-3deg); } 
        60% { transform: translateX(10%) rotate(2deg); } 
        75% { transform: translateX(-5%) rotate(-1deg); } 
        100% { transform: translateX(0%); } 
    }
</style>