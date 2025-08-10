// postcss.config.js

module.exports = {
  plugins: {
    // Correctly reference the Tailwind CSS PostCSS plugin
    'tailwindcss/nesting': {}, // This is often used with Tailwind CSS if you use `@apply` with nesting
    'tailwindcss': {}, // This is the core Tailwind CSS plugin
    'autoprefixer': {}, // Autoprefixer for vendor prefixes
  },
};
