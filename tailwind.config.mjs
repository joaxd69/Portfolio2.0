/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafcff",
        secondary: "#56c3ff",
        tertiary: "#565758",
      },
      fontFamily: {
        ubuntuMono: ["Ubuntu Mono", ...defaultTheme.fontFamily.sans],
        ubuntuMonoBlack: ["Ubuntu Mono Black", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
