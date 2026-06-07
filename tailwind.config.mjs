/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#16231f",
        jade: {
          50: "#eef9f5",
          100: "#d8f1e7",
          600: "#128260",
          700: "#0d674d",
          900: "#09382d"
        },
        amberline: "#f1b84b",
        clay: "#b65a3c"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(11, 42, 34, 0.14)"
      }
    }
  },
  plugins: []
};
