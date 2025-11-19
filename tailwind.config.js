/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Space Grotesk kini ditetapkan sebagai font default (sans)
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};