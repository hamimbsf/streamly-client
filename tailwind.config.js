/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom colors or styles for your dark theme here
      colors: {
        darkBackground: "#1a1a1a",
        darkText: "#eaeaea",
      },
    },
  },
  darkMode: "class", // Enables dark mode using a CSS class
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3b82f6",
          secondary: "#22d3ee",
          accent: "#d946ef",
          neutral: "#374151",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#3b82f6",
          secondary: "#22d3ee",
          accent: "#d946ef",
          neutral: "#111827",
          "base-100": "#1a1a1a",
        },
      },
    ],
  },
};
