/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Agar sizda boshqa fayllar ham bo'lsa, ularni ham shu yerga qo'shing
  ],
  theme: {
    extend: {
      // Agar sizda extend qismi bo'lsa, u shu yerda bo'ladi
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // <-- Shu qatorni qo'shing
  ],
}