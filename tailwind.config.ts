/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E43030",
          orange: "#D48D3B",
          green: "#3E9242",
        },
        secondary: "#974D03",
        "gray-200": "#fdd79b",
        "gray-300": "#fcc469",
        "gray-500": "#fa9c05",
        "gray-600": "#c87d04",
        "gray-700": "#965e03",
        "gray-900": "#321f01",
        "white-100": "#fdad9b",
        "white-200": "#fc8469",
        "black-100": "#3D4258",
        "neutral-black": "#23263B",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        10: "10px",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
