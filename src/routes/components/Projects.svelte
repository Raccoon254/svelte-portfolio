<script lang="ts">
	// Define a type for our project objects
	type Project = {
		title: string
		description: string
		image: string
		projectUrl: string
		githubUrl: string
	}

	const projects: Project[] = [
		{
			title: 'Status Saver',
			description:
				'An android kotlin application that allows users to save statuses from WhatsApp. It also allows users to share statuses with friends and manage saved statuses.',
			image: 'status-saver.png',
			projectUrl: 'https://status-saver.vercel.app',
			githubUrl: 'https://github.com/Raccoon254/status-saver-docs',
		},
		{
			title: 'JeStorm',
			description:
				'A project management tool for developers. Features include real-time chat, payment processing, and notification systems.',
			image: 'jestorm.png',
			projectUrl: 'https://jestorm.vercel.app',
			githubUrl: 'https://github.com/Raccoon254/',
		},
		{
			title: 'Scholarspace',
			description:
				'A Laravel-based web application facilitating assignment help services. Features include real-time chat, payment processing, and notification systems.',
			image: 'scholarspace.png',
			projectUrl: 'https://scholarspace.me',
			githubUrl: 'https://github.com/Raccoon254/Scholarspace.io',
		},
		{
			title: 'Project InternLink',
			description:
				'A revolutionary platform connecting students with internship opportunities. Simplifies the application process and bridges students with their future careers.',
			image: 'internlink.png',
			projectUrl: 'https://intern.co.ke',
			githubUrl: 'https://github.com/FutureSpace-Kenya/InternLink',
		},
		{
			title: 'FutureSpace',
			description:
				"A digital innovation company focusing on solving today's challenges. Services include digital innovation, automation, cybersecurity, and web development.",
			image: 'futurespace.png',
			projectUrl: 'https://futurespace.vercel.app/',
			githubUrl: 'https://github.com/FutureSpace-Kenya',
		},
		{
			title: 'Chuka Marketplace',
			description:
				'A platform for students to buy and sell items within the university. Features include real-time chat, payment processing, and notification systems.',
			image: 'market.png',
			projectUrl: 'https://chuka-marketplace.vercel.app',
			githubUrl: 'https://github.com/Raccoon254/chuka-marketplace',
		},
		{
			title: 'Cline',
			description:
				'A comprehensive client management tool for freelancers. Streamlines operations, improves efficiency, and enhances communication with clients.',
			image: 'cline.png',
			projectUrl: '#',
			githubUrl: 'https://github.com/Raccoon254/cline',
		},
	]
</script>

<section class="pt-16 md:pt-32">
	<h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-2">Projects</h2>
	<div data-aos="fade-in">
		<p class="text-center text-gray-500 dark:text-gray-400 mb-16 md:mb-24">
			Here are some of the projects I've worked on. Click on the project to view more details.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-8">
		{#each projects as project, index}
			<!-- if index is even flex row reverse else flex row -->
			<div
				class="rounded-2xl flex flex-col items-center md:flex-row ring-2 ring-opacity-5 ring-white overflow-hidden transition ring-offset-4 ring-offset-dark hover:ring-opacity-10 hover:scale-[101%] cursor-pointer"
				class:md:flex-row-reverse={index % 2 === 0}
			>
				<img src={project.image} alt={project.title} class="w-full md:w-1/2 h-44 md:h-72 object-cover" />
				<div class="p-6 md:w-1/2">
					<h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
						{project.title}
					</h3>
					<p class="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
					<div class="flex items-center gap-3">
						<a
							href={project.githubUrl}
							class="bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 center transition duration-300 ring-1 ring-offset-2 ring-offset-dark gap-2 ring-green-400"
						>
							<i class="fab fa-github"></i> GitHub
						</a>
						<a
							href={project.projectUrl}
							class="bg-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 center transition duration-300 ring-1 ring-offset-2 ring-offset-dark ring-green-400 gap-2"
						>
							<i class="fas fa-link"></i> View Project
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="text-center mt-12">
		<p class="opacity-20 mb-4">
			This section is still under construction. More projects will be added soon...
		</p>
		<span class="animate-pulse loading loading-ring loading-lg">Load More</span>
	</div>
</section>

<style>
	/* Any additional custom styles can go here */
</style>
