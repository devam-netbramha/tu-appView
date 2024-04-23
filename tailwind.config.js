/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      lg: '24px',
      md: '18px',
      sm: '16px',
      '4xl': '2.25rem',
    },
    colors: {
      background: '#FAFAFA',
      blue: '#006DF5',
      cibil: '#06addc',
      pink: '#D92B7B',
      green: '#098543',
      'office_green':'#008A00',
      purple: '#5A5AC7',
      grey: '#737577',
      orange:'#F26842',
      'dark-yellow': '#B36200',
      'dark_grey': '#595959',
      'dim_grey':'#525252',
      'dark_charcoal': '#262626',
      'light_green': '#E0F6E9',
      'orange_peel': '#FF871F',
      'light_sky_blue': '#E6F6FA',
      'greyish_blue': '#F2F2FC ',
      'light_grey': '#F2F2F2',
      'pale_rose':'#FBE8EC'
    },
    fontFamily: {
      intro: ['Intro', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        16: '16px',
      },
      // borderRadius: {
      //   '4xl': '2rem',
      // },
    },
  },
  plugins: [],
}
