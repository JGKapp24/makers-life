module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'front-page': "url('/LydiaImg2.jpg')",
      }),
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
