/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marina-bg': '#F8F7F3',
        'marina-dark': '#222222',
        'marina-light': '#666666',
        'marina-primary': '#8C6A53',
        'marina-primary-hover': '#73533D',
        'marina-sage': '#79836B',
        'marina-sage-hover': '#636d55',
        'marina-footer': '#2C2C2C',
        'marina-border': '#E5E5E5',
        'marina-social-bg': '#6D7260',
        'marina-cream': '#F1EFE9',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wider-custom': '0.15em',
        'widest-custom': '0.25em',
      },
    },
  },
  plugins: [],
}
