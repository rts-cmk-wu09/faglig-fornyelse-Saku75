/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      height: {
        screen: "100svh",
      },
      minHeight: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
