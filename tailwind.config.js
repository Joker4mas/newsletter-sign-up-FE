/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    screen:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
      'Rob': ['Roboto'],
      },
      colors:{
        //### Primary
      'Tomato':'hsl(4, 100%, 67%)',

      // ### Neutral
      'DarkSlateGrey': 'hsl(234, 29%, 20%)',
      'CharcoalGrey': 'hsl(235, 18%, 26%)',
      'Grey':'hsl(231, 7%, 60%)',
      'White':'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

