/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensures Tailwind scans all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous'], // Add your font family here
      },
    },
  },
  plugins: [],
}

