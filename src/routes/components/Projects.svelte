<script lang="ts">
  // Define a type for our project objects
  type Project = {
      title: string;
      description: string;
      image: string;
      projectUrl: string;
      githubUrl: string;
  };

  const projects: Project[] = [
    {
      title: "Status Saver",
      description: "An android kotlin application that allows users to save statuses from WhatsApp. It also allows users to share statuses with friends and manage saved statuses.",
      image: "status-saver.png",
      projectUrl: "https://status-saver.vercel.app",
      githubUrl: "https://github.com/Raccoon254/status-saver-docs"
    },
      {
          title: "Scholarspace.io",
          description: "A Laravel-based web application facilitating assignment help services. Features include real-time chat, payment processing, and notification systems.",
          image: "scholarspace.png",
          projectUrl: "https://scholarspace.me",
          githubUrl: "https://github.com/Raccoon254/Scholarspace.io"
      },
      {
          title: "Project InternLink",
          description: "A revolutionary platform connecting students with internship opportunities. Simplifies the application process and bridges students with their future careers.",
          image: "internlink.png",
          projectUrl: "https://intern.co.ke",
          githubUrl: "https://github.com/FutureSpace-Kenya/InternLink"
      },
      {
          title: "FutureSpace",
          description: "A digital innovation company focusing on solving today's challenges. Services include digital innovation, automation, cybersecurity, and web development.",
          image: "futurespace.png",
          projectUrl: "https://futurespace.vercel.app/",
          githubUrl: "https://github.com/FutureSpace-Kenya"
      },
      {
          title: "Chuka Marketplace",
          description: "A platform for students to buy and sell items within the university. Features include real-time chat, payment processing, and notification systems.",
          image: "market.png",
          projectUrl: "https://chuka-marketplace.vercel.app",
          githubUrl: "https://github.com/Raccoon254/chuka-marketplace"
      },
      {
          title: "Cline",
          description: "A comprehensive client management tool for freelancers. Streamlines operations, improves efficiency, and enhances communication with clients.",
          image: "cline.png",
          projectUrl: "#",
          githubUrl: "https://github.com/Raccoon254/cline"
      }
  ];
</script>

<section class="py-16">
      <h2 class="text-3xl font-bold text-center mb-8">Projects</h2>
      <div class="grid grid-cols-1 gap-8">
          {#each projects as project, index}
          <!-- if index is even flex row reverse else flex row -->
              <div class="rounded-lg flex flex-col md:flex-row ring overflow-hidden transition hover:ring-opacity-20 cursor-pointer" class:md:flex-row-reverse={index % 2 === 0}>
                  <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
                  <div class="p-6">
                      <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p class="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div class="flex justify-between">
                          <a href={project.projectUrl} class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">Visit Project</a>
                          <a href={project.githubUrl} class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300">
                              <i class="fab fa-github"></i> GitHub
                          </a>
                      </div>
                  </div>
              </div>
          {/each}
      </div>
      <div class="text-center mt-12">
          <p class="text-gray-500 dark:text-gray-400 mb-4">This section is still under construction. More projects will be added soon...</p>
          <a href="#" class="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">View All Projects</a>
      </div>
</section>

<style>
  /* Any additional custom styles can go here */
</style>