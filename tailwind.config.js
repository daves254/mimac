/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: ['./resources/**/*.{ts,tsx,blade.php,css}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Inter','Segoe UI','Roboto','Helvetica','Arial','sans-serif']
      },
      colors: {
        ...colors,
        brand: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b6d7ff',
          300: '#89bcff',
          400: '#5a9cff',
          500: '#2b79ff',
          600: '#145fe6',
          700: '#0f4bb4',
          800: '#0c3988',
          900: '#0b2f6e',
          950: '#081e46'
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
