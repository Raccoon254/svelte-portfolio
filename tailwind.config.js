/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "dark": "rgba(0, 0, 0, 0.7)",
        "dark-2": "rgba(0, 0, 0, 0.8)",
        "dark-3": "rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [require("daisyui")],
}

