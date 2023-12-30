import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,vue,html}",
    './index.html'
  ],
  theme: {
    colors: {
      "dark-purple": '#301534',
      "pink": '#AD28EB',
      "light-pink": '#F8EEFF',
      "pale-purple": '#8B6990',
      "white": '#FFF'
    },
    fontFamily: {
      work: ['Work Sans Variable', 'sans-serif']
    },
    fontSize: {
      display: '3.5rem',
      title: '1.125rem',
      body: '1rem',
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.text-display': {
          fontFamily: theme('fontFamily.work'),
          fontWeight: '700',
          fontSize: '2rem',
          '@screen md': {
            fontSize: theme('fontSize.display'),
          }
        },
        '.text-title': {
          fontFamily: theme('fontFamily.work'),
          fontWeight: '600',
          fontSize: '1rem',
          '@screen md': {
            fontSize: theme('fontSize.title'),
          }
        },
        '.text-body': {
          fontFamily: theme('fontFamily.work'),
          fontWeight: '400',
          lineHeight: '150%',
          fontSize: '0.875rem',
          '@screen md': {
            fontSize: theme('fontSize.body'),
          }
        },
        '.card-shadow': {
          boxShadow: '0px 32px 56px 0px rgba(80, 0, 118, 0.10);'
        }
      })
    })
  ],
}

