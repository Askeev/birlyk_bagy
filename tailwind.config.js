/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontSize:{
      'xl': ['22px', '32px'],
      '6xl': ['56px', '56px'],
      '3xl':['32px', '40px'],
      'lg':['18px', '20px'],
    },

    extend: {
      colors:{
        'brown1':'#2E2829',
        'brown2':'rgba(121, 110, 103, 0.20)',
        'brown3': 'rgba(121, 110, 103, 0.50)',
        'brown4':'#ECA153',
        'brown5':'#9F815D'
      }
    },
  },
  plugins: [],
}

