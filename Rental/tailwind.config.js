// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F86C23', // Your orange color
          hover: '#E55C1A',   // Darker orange for hover
        },
        secondary: {
          DEFAULT: '#3B82F6', // Example blue
          hover: '#2563EB',   // Darker blue
        }
      }
    }
  },
  plugins: [],
}