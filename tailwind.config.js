/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bgchange: {
          "0%, 100%": { backgroundColor: "rgba(0,0,0,0.6)" },   // dark
          "50%": { backgroundColor: "rgba(59,130,246,0.5)" },   // blue-500 w/ opacity
        },
      },
      animation: {
        bgchange: "bgchange 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
