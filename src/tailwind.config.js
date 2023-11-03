/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
          typing: 'typing 3s steps(37) 2s forwards, blink .75s steps(2) infinite',
      },
      keyframes: {
          typing: {
              from: { width: '0' },
              to: { width: '37.2ch' },
          },
          blink: {
              from: { 'border-right-color': 'transparent' },
              to: { 'border-right-color': 'white' },
          },
      },
    },
  },
  plugins: [],
}

