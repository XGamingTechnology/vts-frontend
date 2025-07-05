// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- wajib untuk semua file react
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19bf9e",
        secondary: "#127164",
      },
    },
  },
  plugins: [],
};
