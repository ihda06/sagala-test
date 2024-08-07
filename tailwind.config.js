/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#eff6ff",
          100: "#dae9ff",
          200: "#bddaff",
          300: "#90c3ff",
          400: "#5ca3fe",
          500: "#367efb",
          600: "#205ef0",
          700: "#1849dd",
          800: "#1a3cb3",
          900: "#111c44",
          950: "#0b1437",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
