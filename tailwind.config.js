module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  theme: {
    extend: {
      screens: {
        'm-portrait': { raw: '(max-width:450px),(orientation: portrait)' },
      },
      colors: {
        'c1-gray': '#3a3a3a',
      },
      fontFamily: {
        tangerine: ['Tangerine', 'sans-serif'],
      },
      fontSize: {
        'tangerine-text': '2rem',
        'tangerine-header': '8rem',
      },
      keyframes: {
        lightUp: {
          '0%, 100%': {
            'text-shadow':
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d69e2e, 0 0 70px #d69e2e, 0 0 80px #d69e2e, 0 0 100px #d69e2e, 0 0 150px #d69e2e',
          },
          '50%': {
            'text-shadow':
              '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #d69e2e, 0 0 35px #d69e2e, 0 0 40px #d69e2e, 0 0 50px #d69e2e, 0 0 75px #d69e2e',
          },
        },
      },
      animation: {
        lightUp: 'lightUp 2s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
