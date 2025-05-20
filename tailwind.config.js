/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mac-bg": "#f3f4f6",
        "mac-window": "rgba(255, 255, 255, 0.8)",
        "mac-border": "rgba(0, 0, 0, 0.1)",
        "mac-highlight": "#007aff",
        "mac-accent": "#34c759",
        "mac-danger": "#ff3b30",
        "mac-warning": "#ffcc00",
        "mac-text": "#1d1d1f",
        "mac-text-secondary": "#86868b",
      },
      boxShadow: {
        mac: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        "mac-window":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "mac-dock": "0 0 20px rgba(0, 0, 0, 0.2)",
      },
      backdropFilter: {
        mac: "blur(20px)",
      },
      animation: {
        "bounce-slight": "bounce-slight 0.5s ease-in-out",
        "scale-up": "scale-up 0.3s ease-in-out",
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
