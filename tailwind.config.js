module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'green-lighter': '#008459',
        'khayeri-100':'#B23A94',
        'khayeri-200':'#882e71',
      },
      spacing: {
        '50px': '50px',
      }
    },
    fontFamily: {
      'halal': ['Rubik', 'sans-serif'],
    },
    plugins: [],
  }
}
