// ----------------------------------------------------------------------
export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Inter, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  hero: {
    fontWeight: 700,
    lineHeight: 72 / 48,
    fontSize: pxToRem(48),
  },
  display: {
    fontWeight: 700,
    lineHeight: 48 / 32,
    fontSize: pxToRem(32),
  },
  headline: {
    fontWeight: 700,
    lineHeight: 36 / 24,
    fontSize: pxToRem(24),
  },
  title1: {
    fontWeight: 700,
    lineHeight: 30 / 20,
    fontSize: pxToRem(20),
  },
  title2: {
    fontWeight: 700,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
  },
  title3: {
    fontWeight: 700,
    lineHeight: 21 / 14,
    fontSize: pxToRem(14),
  },
  'ui-large': {
    fontWeight: 400,
    lineHeight: 30 / 20,
    fontSize: pxToRem(20),
  },
  'ui-baseline': {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
  },
  'ui-small': {
    fontWeight: 400,
    lineHeight: 21 / 14,
    fontSize: pxToRem(14),
  },
  'ui-tiny': {
    fontWeight: 400,
    lineHeight: 18 / 12,
    fontSize: pxToRem(12),
  },
  'ui-large-medium': {
    fontWeight: 600,
    lineHeight: 30 / 20,
    fontSize: pxToRem(20),
  },
  'ui-baseline-medium': {
    fontWeight: 600,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
  },
  'ui-small-medium': {
    fontWeight: 600,
    lineHeight: 21 / 14,
    fontSize: pxToRem(14),
  },
  tiny: {
    fontWeight: 400,
    lineHeight: 18 / 12,
    fontSize: pxToRem(12),
  },
  micro: {
    fontWeight: 400,
    lineHeight: 16.5 / 11,
    fontSize: pxToRem(11),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 400,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    textTransform: 'none',
  },
} as const;

export default typography;
