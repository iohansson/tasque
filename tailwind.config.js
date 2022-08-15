/** @type {import('tailwindcss').Config} */
const scarlet = {
  50: '#F9ECEC',
  100: '#F5DCDB',
  200: '#F0B6B3',
  300: '#EF8B85',
  400: '#F35C54',
  500: '#FB271C',
  600: '#D1190F',
  700: '#951A14',
  800: '#5D1713',
  900: '#2C0E0C',
  DEFAULT: '#FB271C',
};
const lightning = {
  50: '#FFFBF0',
  100: '#FEF6DC',
  200: '#FDECB4',
  300: '#FCE188',
  400: '#FBD55B',
  500: '#F9C61E',
  600: '#E5B106',
  700: '#C79A05',
  800: '#A98305',
  900: '#775C03',
  DEFAULT: '#F9C61E',
};
const heliotrope = {
  50: '#FEFAFF',
  100: '#F8E5FF',
  200: '#EFC2FF',
  300: '#E499FF',
  400: '#D970FF',
  500: '#CD4BFD',
  600: '#BB00FF',
  700: '#8A00BD',
  800: '#560075',
  900: '#22002E',
  DEFAULT: '#CD4BFD',
};
const clay = {
  50: '#F1F2F9',
  100: '#E6E8F4',
  200: '#C8CCE4',
  300: '#A5ABCF',
  400: '#787FB0',
  500: '#282B3F',
  600: '#22253A',
  700: '#22263F',
  800: '#16192D',
  900: '#14182E',
};

const getGeometricRate = (a1, an, n) => Math.pow(Math.E, Math.log(an / a1) / (n - 1));

const generatePalette = ([h, s], steps, ds) => {
  const minShade = 100;
  const maxShade = minShade * steps;
  const startShade = maxShade;
  const l1 = 2;
  const r = getGeometricRate(l1, 100, steps);

  return Object.fromEntries(new Array(steps).fill(1).map((v, index) => [
    startShade - index * 100,
    `hsl(${h}, ${s + index * ds}%, ${l1 * Math.pow(r, index)}%)`,
  ]));
};

const gray = generatePalette([0, 0], 10, 0);
const scarletPale = generatePalette([3, 4], 10, 0);
const lightningGeometric = generatePalette([46, 95], 10, 0);

const primary = scarlet;
const secondary = lightningGeometric;
const accent = heliotrope;
const bg = scarletPale[900];
const onBg = scarletPale[100];
const surface = scarletPale[700];
const onSurface = scarletPale[100];

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        accent,
        surface,
        onSurface,
        bg,
        onBg,
        gray,
        'scarlet-pale': scarletPale,
      },
    },
  },
  plugins: [],
};
