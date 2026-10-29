/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0782C8", dark: "#056399", light: "#E6F3FB" },
        accent: { DEFAULT: "#84C225", dark: "#6AA017", light: "#F4FAEC" },
        ink: "#1A1D21",
      },
      fontFamily: {
        sans: ['"Titillium Web"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(7, 40, 70, 0.25)",
      },
      // Keyframes animate `translate`/`scale` (not `transform`) so they combine with hover transforms
      keyframes: {
        "fade-up": {
          from: { opacity: "0", translate: "0 24px" },
          to: { opacity: "1", translate: "0 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "zoom-in": {
          from: { opacity: "0", scale: "0.92" },
          to: { opacity: "1", scale: "1" },
        },
        float: {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "0 -14px" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6", scale: "1" },
          "50%": { opacity: "1", scale: "1.04" },
        },
        "spin-slow": {
          to: { rotate: "360deg" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "zoom-in": "zoom-in 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
