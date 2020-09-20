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
    },
  },
  variants: {},
  plugins: [],
};
