<script lang="ts">
	import { onMount } from 'svelte';

	let nameSection: HTMLElement;
	let nameSpan: HTMLElement;
	let messageContainer: HTMLElement;
	let message: HTMLElement;
	let titleElement: HTMLElement;
	let iconElement: HTMLElement;
	let currentIndex: number = 0;
	let currentThemeSetting: string;

	interface Message {
        title: string;
        icon: string;
        message: string;
    }

		const messages: Message[] = [
			{ title: 'Fun fact', icon: '⚡️', message: "I'm a developer based in Nairobi, Kenya." },
			{ title: 'Food', icon: '🍗', message: 'My favorite food is grilled meat.' },
			{ title: 'Gamer', icon: '🎮', message: 'I love playing video games.' },
			{ title: 'Music', icon: '🎵', message: 'I like diverse content' },
			{ title: 'Movie', icon: '🎬', message: 'My favorite movie is The Dictator.' },
			{ title: 'Show', icon: '🍿', message: 'My favorite TV show is Money Heist.' },
	];

	const letters = "abcdefghijklmnopqrstuvwxyz";
  let interval: number | null = null;

	function showNextMessage(): void {
		currentIndex = (currentIndex + 1) % messages.length;
        const nextMessage = messages[currentIndex];

        let newMessageElement = document.createElement('div');
        newMessageElement.classList.add('message');
        newMessageElement.innerHTML = `<p>${nextMessage.message}</p>`;
        newMessageElement.style.transform = 'translateX(100%)';

        messageContainer.appendChild(newMessageElement);

        setTimeout(() => {
            message.style.transform = 'translateX(-100%)';
            newMessageElement.style.transform = 'translateX(0)';
        }, 40);

			setTimeout(() => {
					messageContainer.removeChild(message);
					message = newMessageElement;
					titleElement.textContent = nextMessage.title;
					iconElement.textContent = nextMessage.icon;
			}, 500);
	}

	function positionIcons(): void {
			const container = document.querySelector('.icon-container') as HTMLElement;
			const icons = container.querySelectorAll('i');
			const radius = container.offsetWidth / 2;
			const iconCount = icons.length;

			icons.forEach((icon, index) => {
					const angle = (index / iconCount) * 2 * Math.PI;
					const x = radius + radius * Math.cos(angle) - icon.offsetWidth / 2;
					const y = radius + radius * Math.sin(angle) - icon.offsetHeight / 2;

					icon.style.left = `${x}px`;
					icon.style.top = `${y}px`;
			});

			container.style.animation = 'rotation 20s infinite linear';
			icons.forEach((icon) => {
					icon.style.animation = 'reverse-rotation 20s infinite linear';
			});

			container.addEventListener('mouseover', () => {
					container.style.animationPlayState = 'paused';
					icons.forEach((icon) => {
							icon.style.animationPlayState = 'paused';
					});
			});

			container.addEventListener('mouseout', () => {
					container.style.animationPlayState = 'running';
					icons.forEach((icon) => {
							icon.style.animationPlayState = 'running';
					});
			});
	}

	function createBackground(): void {
			const background = document.createElement('div') as HTMLElement;
			background.classList.add('background');
			document.body.appendChild(background);

			const characters = '01';
			const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
			const gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size'));

			const columns = Math.floor(window.innerWidth / gridSize) + 1;
			const rows = Math.floor(window.innerHeight / gridSize) + 1;

			for (let i = 0; i < columns; i++) {
					for (let j = 0; j < rows; j++) {
							const char = document.createElement('span');
							char.classList.add('character');
							background.appendChild(char);

							const x = i * gridSize;
							const y = j * gridSize;
							char.style.left = `${x}px`;
							char.style.top = `${y}px`;

							setInterval(() => {
									const random = Math.random();
									if (random < 0.8) {
											char.textContent = characters[Math.floor(Math.random() * characters.length)];
									} else {
											char.textContent = specialChars[Math.floor(Math.random() * specialChars.length)];
									}
							}, Math.random() * 5000 + 1000);

							setInterval(() => {
									char.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
							}, Math.random() * 5000 + 1000);
					}
			}
	}

	function handleNameHover(event: MouseEvent): void {
			let iteration = 0;

			clearInterval(interval!);

			interval = setInterval(() => {
            const target = event.target as HTMLElement;
            target.innerText = target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return target.dataset.value![index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if(iteration >= target.dataset.value!.length){ 
                clearInterval(interval!);
            }
            iteration += 1 / 3;
        }, 60);
    }

		function changeName(): void {
        nameSpan.classList.add('fade-out');

        setTimeout(() => {
            if (nameSection.innerHTML.includes('Raccoon')) {
                nameSection.innerHTML = 'I\'m <span id="name" data-value="Steve Tom" class="name fade-in">Steve Tom</span>';
            } else {
                nameSection.innerHTML = 'Alias <span id="name" data-value="Raccoon" class="name fade-in">Raccoon</span>';
            }

            nameSpan = document.getElementById('name') as HTMLElement;
            nameSpan.classList.remove('fade-out');
            nameSpan.classList.add('fade-in');
        }, 1000);
    }

    interface ThemeSettings {
        localStorageTheme: string | null;
        systemSettingDark: MediaQueryList;
    }

	function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }: ThemeSettings): string {
        if (localStorageTheme !== null) {
            return localStorageTheme;
        }

        if (systemSettingDark.matches) {
            return "dark";
        }

        return "light";
    }

		interface ButtonUpdateParams {
        buttonEl: HTMLElement;
        isDark: boolean;
    }

	function updateButton({ buttonEl, isDark }: ButtonUpdateParams): void {
        const currentIcon = buttonEl.querySelector("i");
        const iconClass = isDark ? "fas fa-moon" : "fas fa-sun";
        const newIcon = document.createElement("i");
        newIcon.className = iconClass;
        newIcon.style.animationName = "move-in-left";

        const logoImage = document.querySelector(".logo-image") as HTMLImageElement;
        logoImage.src = `${isDark ? "assets/images/logo-light.png" : "assets/images/logo-dark.png" }`;

        const handleAnimationEnd = () => {
            buttonEl.innerHTML = "";
            buttonEl.appendChild(newIcon);
            buttonEl.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
            currentIcon?.removeEventListener("animationend", handleAnimationEnd);
        };

        if (currentIcon) {
            currentIcon.style.animationName = "move-out-right";
            currentIcon.addEventListener("animationend", handleAnimationEnd);
        } else {
            buttonEl.innerHTML = "";
            buttonEl.appendChild(newIcon);
            buttonEl.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
        }
    }

    function updateThemeOnHtmlEl({ theme }: { theme: string }): void {
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }

    onMount(() => {
        nameSection = document.querySelector(".name_section") as HTMLElement;
        nameSpan = document.getElementById('name') as HTMLElement;
        messageContainer = document.querySelector('.message-container') as HTMLElement;
        message = messageContainer.querySelector('.message') as HTMLElement;
        titleElement = document.querySelector('.title') as HTMLElement;
        iconElement = document.querySelector('.icon') as HTMLElement;

        const button = document.querySelector("[data-theme-toggle]") as HTMLElement;
        const localStorageTheme = localStorage.getItem("theme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

        currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

        updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
        updateThemeOnHtmlEl({ theme: currentThemeSetting });

        button.addEventListener("click", () => {
            const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

            localStorage.setItem("theme", newTheme);
            updateButton({ buttonEl: button, isDark: newTheme === "dark" });
            updateThemeOnHtmlEl({ theme: newTheme });

            currentThemeSetting = newTheme;
        });

        setInterval(showNextMessage, 2000);
        setInterval(changeName, 5000);

        window.addEventListener('load', positionIcons);
        window.addEventListener('resize', positionIcons);

        createBackground();
        window.addEventListener('resize', () => {
            document.querySelector('.background')?.remove();
            createBackground();
        });
    });
</script>

<svelte:head>
	<title>Steve Tom | Applied Computer Science Student & Self-Taught Developer</title>
	<meta name="description" content="Steve Tom alias Raccoon254 - Graduate from Chuka University, specializing in Applied Computer Science. Experienced in YouTube, online courses, computer engineering, networking, Python, PHP, JavaScript, and Kotlin for Android Studio." />
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</svelte:head>

<header>
	<div class="logo">
			<img class="logo-image" src="assets/images/logo-light.png" alt="Raccoon254's logo" />
	</div>
	<div class="nav">
			<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
					<button type="button" data-theme-toggle aria-label="Change to light theme">
							Change to theme
					</button>
			</ul>
	</div>
</header>

<main class="main h-screen">
	<div class="left">
			<h1>Hey <span id="wave" class="wave">👋</span></h1>
			<h1 class="name_section" id="name_section">
					I'm <span id="name" data-value="Raccoon" class="name" on:mouseenter={handleNameHover}>Raccoon</span>
			</h1>
			<div class="container pb-2">
					<div class="icon">⚡️</div>
					<div class="data">
							<h2 class="title">Fun Fact 😄</h2>
							<div class="message-container">
									<div class="message">
											<p>I'm a developer based in Nairobi, Kenya.</p>
									</div>
							</div>
					</div>
			</div>
	</div>
	<div class="right z-50">
			<div class="right-container">
					<div class="image-container">
							<img
									class="user-image z-50 relative"
									src="steve-tom-half-image.png"
									alt="Steve Tom's Image, Or Raccoon's image, Or Raccoon254's image"
							/>
					</div>
					<div class="icon-container">
							<i class="colored devicon-java-plain"></i>
							<i class="colored devicon-laravel-plain"></i>
							<i class="colored devicon-javascript-plain"></i>
							<i class="colored devicon-git-plain"></i>
							<i class="colored devicon-amazonwebservices-plain"></i>
							<i class="colored devicon-react-original"></i>
					</div>
			</div>
	</div>
</main>

<div class="sections z-50 py-10 bg-gray-100 bg-opacity-5">
	<!-- About section -->
	<section id="about" class="mb-12 px-4">
			<h2 class="text-3xl text-center font-bold mb-4 md:mb-6">About Me</h2>
			<div class="ring-1 ring-opacity-20 ring-gray-400 shadow-md rounded-lg p-6">
					<p class="mb-4">
							As a computer science graduate and a passionate software developer, I'm dedicated to
							crafting efficient and scalable web applications. My journey in tech is driven by a
							ceaseless curiosity and a desire to tackle real-world challenges through innovative
							technology.
					</p>

					<h3 class="text-xl font-semibold mb-2">Skills</h3>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
							{#each ['Java', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'React', 'Laravel', 'Git', 'Svelte', 'Node.js', 'Tailwind CSS', 'MySQL', 'Next.js', 'Bash'] as skill}
									<div class="flex items-center">
											<i class="devicon-{skill.toLowerCase()}-plain colored text-4xl mr-2"></i>
											<span>{skill}</span>
									</div>
							{/each}
					</div>
			</div>
	</section>

	<!-- Projects section -->
<section id="projects" class="mb-12 px-4">
	<h2 class="text-3xl text-center font-bold mb-4 md:mb-6">Projects</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each [
					{ title: 'Scholarspace.io', image: 'assets/images/scholarspace.png', description: 'A Laravel-based web application facilitating assignment help services. Features include real-time chat, payment processing, and notification systems.', link: 'https://scholarspace.me' },
					{ title: 'Project InternLink', image: '/assets/images/internlink.png', description: 'A revolutionary platform connecting students with internship opportunities. Simplifies the application process and bridges students with their future careers.', link: 'https://intern.co.ke' },
					{ title: 'FutureSpace', image: '/assets/images/futurespace.png', description: 'A digital innovation company focusing on solving today\'s challenges. Services include digital innovation, automation, cybersecurity, and web development.', link: 'https://futurespace.vercel.app/' },
					{ title: 'Cline', image: '/assets/images/cline.png', description: 'A comprehensive client management tool for freelancers. Streamlines operations, improves efficiency, and enhances communication with clients.', link: '#' }
			] as project}
					<div class="ring-1 ring-opacity-20 ring-gray-400 shadow-md rounded-lg overflow-hidden">
							<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
							<div class="p-6">
									<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
									<p class="mb-4">{project.description}</p>
									<a href={project.link} class="text-blue-500 hover:underline">Visit Project</a>
									<a href="#" class="ml-4 text-gray-500 hover:text-gray-700">
											<i class="devicon-github-original"></i> GitHub
									</a>
							</div>
					</div>
			{/each}
	</div>
	<div class="text-center">
			<i class="fas fa-cog text-4xl fa-spin text-gray-500"></i>
	</div>
	<div class="text-center my-6 opacity-40 text-xs">
			This section is still under construction. More projects will be added soon...
			<i class="fas fa-tools ml-2"></i>
	</div>
	<div class="text-center">
			<a href="#" class="ring-1 btn">View All Projects</a>
	</div>
</section>

<!-- Contact section -->
<section id="contact" class="mb-12 px-4">
	<h2 class="text-3xl text-center font-bold mb-4 md:mb-6">Contact</h2>
	<div class="ring-1 ring-opacity-20 ring-gray-400 shadow-md rounded-lg p-6">
			<p class="mb-4">
					I'm always open to discussing new projects, creative ideas, or opportunities to be part
					of your visions.
			</p>
			<div class="flex flex-col space-y-2">
					{#each [
							{ icon: 'devicon-github-original', text: 'Raccoon254', link: 'https://github.com/Raccoon254' },
							{ icon: 'fas fa-envelope', text: 'tomsteve187@gmail.com', link: 'mailto:tomsteve187@gmail.com' },
							{ icon: 'devicon-linkedin-plain', text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/steve-tom-822a81230/' },
							{ icon: 'fab fa-whatsapp', text: 'WhatsApp', link: 'https://wa.me/254758481320' },
							{ icon: 'fab fa-instagram', text: 'Instagram', link: 'https://www.instagram.com/raccoon.254/' }
					] as contact}
							<a
									href={contact.link}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center text-gray-700 hover:text-gray-900"
							>
									<i class="{contact.icon} text-2xl mr-2"></i>
									<span>{contact.text}</span>
							</a>
					{/each}
			</div>
	</div>
</section>
</div>

<style>
/* Add your styles here */
:global(.animate-on-scroll) {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

:global(.animate-on-scroll.visible) {
	opacity: 1;
	transform: translateY(0);
}

.wave {
	animation: wave-animation 2.5s infinite;
	transform-origin: 70% 70%;
	display: inline-block;
}

@keyframes wave-animation {
	0% { transform: rotate( 0.0deg) }
	10% { transform: rotate(14.0deg) }
	20% { transform: rotate(-8.0deg) }
	30% { transform: rotate(14.0deg) }
	40% { transform: rotate(-4.0deg) }
	50% { transform: rotate(10.0deg) }
	60% { transform: rotate( 0.0deg) }
	100% { transform: rotate( 0.0deg) }
}

/* Add more styles as needed */
</style>