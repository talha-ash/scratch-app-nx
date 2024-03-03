/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#30BE76',
        primaryLight: '#D6F2E4',
        systemRed: '#F84971',
        systemYellow: '#F8B449',
        textBlack: '#030F09',
        textDarkGray: '#767676',
        textGray: '#CCCCCC',
        textLightGray: '#E6E6E6',
        textLightestGray: '#F7F8FA',
        overlay: 'rgba(40, 41, 40, 0.5)',
        shadow: 'rgba(13, 51, 32, 0.1)',
      },
      backgroundColor: {
        black: '#030F09',
        darkGray: '#767676',
        gray: '#CCCCCC',
        lightGray: '#E6E6E6',
        lightestGray: '#F7F8FA',
      },
      fontSize: {
        h1: [
          '2.5rem',
          {
            lineHeight: 'normal',
            letterSpacing: '-0.031rem',
            fontWeight: 600,
          },
        ],
        h2: [
          '2rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0rem',
            fontWeight: 700,
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0rem',
            fontWeight: 700,
          },
        ],
        h4: [
          '1.25rem',
          {
            lineHeight: 'normal',
            letterSpacing: '0rem',
            fontWeight: 700,
          },
        ],
        h5: [
          '1rem',
          {
            lineHeight: 'normal',
            letterSpacing: '0rem',
            fontWeight: 700,
          },
        ],
        cardItem: [
          '1.125rem',
          {
            lineHeight: '2rem',
            letterSpacing: '0rem',
            fontWeight: 600,
          },
        ],
        lead: [
          '1rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0rem',
            fontWeight: 400,
          },
        ],
        body: [
          '0.875rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0rem',
            fontWeight: 400,
          },
        ],
        button: [
          '1rem',
          {
            lineHeight: 'normal',
            letterSpacing: '0.02rem',
            fontWeight: 700,
          },
        ],
        textGray: [
          '1rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0rem',
            fontWeight: 400,
          },
        ],
        textSubtitle: [
          '1rem',
          {
            lineHeight: '1.375rem',
            letterSpacing: '0rem',
            fontWeight: 400,
          },
        ],
        caption: [
          '0.75rem',
          {
            lineHeight: 'normal',
            letterSpacing: '0.025rem',
            fontWeight: 400,
          },
        ],
      },
    },
    fontFamily: {
      sans: ['Nunito Sans'],
    },
  },
  plugins: [],
};
