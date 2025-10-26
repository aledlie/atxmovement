/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          300: '#ffa69e',
          400: '#ff8b7f',
          500: '#ff7061',
        },
        amber: {
          300: '#ffd89b',
          400: '#ffc86b',
          500: '#ffb84d',
        },
        teal: {
          100: '#e0f2f1',
          300: '#80cbc4',
          400: '#4db6ac',
          500: '#26a69a',
          600: '#00897b',
          900: '#004d40',
          950: '#00332a',
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
