/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010313",
        secondary: "#1a0b31",
      },
    },
  },
  plugins: [],
};
