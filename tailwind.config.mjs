/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        primary: "var(--primary)",
        green: "var(--green)",
        pink: "var(--pink)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        blue: "var(--blue)",
        indigo: "var(--indigo)"
      },
    },
  },
  plugins: [],
};
