/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(200, 15%, 8%)",
        darkBlue: "hsl(209, 23%, 22%)",
      },
    }, // Extend default Tailwind styles here
  },
  plugins: [], // Add Tailwind plugins if needed
};
