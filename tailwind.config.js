/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        park: {
          50: '#f7f9f4',
          100: '#eef3e6',
          200: '#d9e6c8',
          300: '#bdd39f',
          400: '#9db872',
          500: '#7f9c4f',
          600: '#627c3c',
          700: '#4d6132',
          800: '#3f4f2c',
          900: '#354327',
          950: '#1b2413',
        },
        sun: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffde88',
          300: '#ffc84a',
          400: '#ffb020',
          500: '#f98c07',
          600: '#dd6602',
          700: '#b74506',
          800: '#94350c',
          900: '#7a2d0d',
          950: '#461502',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3ebe0',
          200: '#e5d4bf',
          300: '#d4b896',
          400: '#c29a6f',
          500: '#b58355',
          600: '#a76f49',
          700: '#8b593e',
          800: '#714938',
          900: '#5c3d30',
          950: '#311f18',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};
