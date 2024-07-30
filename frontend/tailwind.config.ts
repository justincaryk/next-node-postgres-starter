import type { Config } from 'tailwindcss';

const colors = {
  'blue-light': 'rgb(43,220,254)',
  'blue-md': 'rgb(12,176,234)',
  'blue-dark': 'rgb(6,68,91)',
  'blue-x-dark': 'rgb(4,33,47)',
  'green-md': 'rgb(122,211,42)',
  'green-dark': 'rgb(71,165,28)',
  'orange-pop': 'rgb(250,102,16)',
  'red-error': 'rgb(171,17,30)',
};

const heightExtended = {
  'screen-1/2': '50vh',
  'screen-2/3': '75vh',
};
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: colors,
      backgroundColor: colors,
      borderColor: colors,
      height: heightExtended,
      minHeight: heightExtended,
      maxHeight: heightExtended,
      fontWeight: {
        'extra-bold': '800',
      },
      // boxShadow
    },
  },
  plugins: [],
};
export default config;
