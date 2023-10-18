import { alpha } from '@mui/material/styles';

export type ColorSchema =
  | 'default'
  | 'variant2'
  | 'variant3'
  | 'variant4'
  | 'variant5'
  | 'variant6';

const DIVIDER = '#767676';

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const CRIMSON_RED = {
  0: '#FFFFFF',
  50: '#f7e9e9',
  100: '#f0d3d4',
  150: '#e8bcbe',
  200: '#e0a6a8',
  250: '#d99093',
  300: '#d17a7d',
  350: '#c96467',
  400: '#c14d51',
  450: '#ba373c',
  500: '#b22126',
  550: '#a01e22',
  600: '#8e1a1e',
  650: '#7d171b',
  700: '#6b1417',
  750: '#591113',
  800: '#470d0f',
  850: '#350a0b',
  900: '#240708',
  950: '#120304',
  1000: '#000000',
};

const PRIMARY = {
  light: CRIMSON_RED[450],
  main: CRIMSON_RED[500],
  dark: CRIMSON_RED[750],
  contrastText: '#FFFFFF',
  shadow: '#591113',
  infoBox: '#6E1F1E',
};

const SECONDARY = {
  light: '#111111',
  main: '#181818',
  dark: '#181818',
  contrastText: '#FFFFFF',
  shadow: '#591113',
};

const INFO = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  light: '#21B264',
  main: '#21B264',
  dark: '#21B264',
  contrastText: '#FFFFFF',
};

const WARNING = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: GREY[800],
};

const ERROR = PRIMARY;

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: DIVIDER,
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette() {
  const colorPalette = {
    ...COMMON,
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: COMMON.common.black,
      neutral: alpha(GREY[500], 0.16),
    },
  } as const;

  return colorPalette;
}
