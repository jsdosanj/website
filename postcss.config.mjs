// Tailwind v4 through PostCSS. The Astro build used @tailwindcss/vite; Next's
// pipeline wants the PostCSS plugin instead.
export default {
  plugins: { '@tailwindcss/postcss': {} },
};
