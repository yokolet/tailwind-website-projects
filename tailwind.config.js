/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      spacing: {
        180: '32rem',
      },
      letterSpacing: {
        widest: '.3em',
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('/src/assets/fylo/images/logo-dark-mode.svg')",
        'logo-light-mode': "url('/src/assets/fylo/images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('/src/assets/fylo/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/src/assets/fylo/images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  plugins: [],
}
