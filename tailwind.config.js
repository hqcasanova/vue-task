/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    transitionDuration: {
      DEFAULT: '200ms',
    },

    extend: {
      colors: {
        white: '#fff',
        'lightest-grey': '#f0f2f5',
        'lighter-grey': '#dddee0',
        'light-grey': '#91929e',
        grey: '#7d8592',
        black: '#0a1629',

        primary: '#713fff',
        'dark-primary': '#3f00f2',

        danger: '#f65959',
        'dark-danger': '#ee0c21',
        warning: '#ffbd21',
        'dark-warning': '#f4ac00',
        ok: '#0ac947',
        'dark-ok': '#08aa3c',
      },

      boxShadow: {
        diffused: '0 0.5rem 3.6rem rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },

      fontSize: {
        '4.5xl': '2.5rem',
      },

      screens: {
        '3xs': '340px',
        '2xs': '400px',
        xs: '600px',
      },

      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        loading: 'loading 1.5s cubic-bezier(0.2, 0.5, 0.4, 0.7) 0.1s infinite',
      },

      transitionProperty: {
        dashoffset: 'stroke-dashoffset',
      },
    },
  },
  plugins: [],
};
