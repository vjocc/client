module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'validate': 'tomato',
        grey: {
          900: '#373530'
        },
        yellow: {
          25: '#F6F3EF'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
