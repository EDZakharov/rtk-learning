/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        withoutHeader: 'calc(100vh - 150px)',
        header: '150px',
      },
    },
  },
  plugins: [],
};
