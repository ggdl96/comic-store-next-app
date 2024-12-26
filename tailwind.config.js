/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        link: '#3333e9',
        primary: {
          500: '#2CBCAE',
          1000: '#3FFFEC',
        },
        secondary: {
          500: '#BC7411',
          1000: '#ff9f1c',
        },
        error: '#DA3846',
        warning: '#DA893E',
        info: '#67A0DA',
        'font-main': {
          default: '#000',
          dark: '#fff',
        },
        empty: '#C4B7B7',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|white|purple|midnight|metal|tahiti|silver|bermuda|green|emerald)/,
    },
  ],
};
