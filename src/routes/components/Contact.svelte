<script lang="ts">
  // Define a type for contact information
  type ContactInfo = {
      icon: string;
      label: string;
      value: string;
      link: string;
  };

  // Array of contact information
  const contactInfo: ContactInfo[] = [
      {
          icon: "fas fa-envelope",
          label: "Email",
          value: "tomsteve187@gmail.com",
          link: "mailto:tomsteve187@gmail.com"
      },
      {
          icon: "fab fa-linkedin",
          label: "LinkedIn",
          value: "Steve Tom",
          link: "https://www.linkedin.com/in/steve-tom-822a81230/"
      },
      {
          icon: "fab fa-whatsapp",
          label: "WhatsApp",
          value: "+254 758 481 320",
          link: "https://wa.me/254758481320"
      },
      {
          icon: "fab fa-instagram",
          label: "Instagram",
          value: "@raccoon.254",
          link: "https://www.instagram.com/raccoon.254/"
      }
  ];
</script>

<section id="contact" class="pt-16 md:pt-32">
  <div class="">
      <h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-8">Contact Me</h2>
      
      <div class="max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <div class="p-6 md:p-8">
              <p data-aos="zoom-in" class="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {#each contactInfo as info, index}
                      <a href={info.link} 
                         data-aos="zoom-in"
                         data-aos-delay={100*(index+1)}
                         class="flex items-center p-4 bg-gray-600 bg-opacity-10 rounded-lg transition-colors duration-300 hover:bg-gray-800"
                         target="_blank" 
                         rel="noopener noreferrer">
                          <i class="{info.icon} text-2xl text-blue-500 dark:text-blue-400 mr-4"></i>
                          <div>
                              <h3 class="font-semibold text-gray-800 dark:text-white">{info.label}</h3>
                              <p class="text-gray-600 dark:text-gray-300">{info.value}</p>
                          </div>
                      </a>
                  {/each}
              </div>
          </div>
      </div>

      <div class="mt-12 text-center">
          <p data-aos="zoom-up" class="text-gray-600 dark:text-gray-300 mb-4">
              Prefer a more formal approach? Feel free to send me a message!
          </p>
          <div class="center">
            <a href="mailto:tomsteve187@gmail.com" 
             class="bg-transparent border border-white px-4 py-2 w-36 rounded-full hover:bg-white hover:text-gray-900 center transition duration-300 ring-1 ring-offset-2 ring-offset-dark gap-2 ring-green-400">
              <i class="fas fa-envelope"></i>
              Send Email
          </a>
          </div>
      </div>
  </div>
</section>

<style>
  /* Any additional custom styles can go here */
</style>