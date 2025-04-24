// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#F9AB00",
        accent: "#00C896",
        dark: "#1E1E2F",
        light: "#F5F7FA",
      },
    },
  },
  plugins: [],
};
