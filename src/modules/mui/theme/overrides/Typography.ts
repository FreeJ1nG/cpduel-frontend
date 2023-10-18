import { Components, Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
    hero: true;
    display: true;
    headline: true;
    title1: true;
    title2: true;
    title3: true;
    'ui-large': true;
    'ui-baseline': true;
    'ui-small': true;
    'ui-tiny': true;
    'ui-large-medium': true;
    'ui-baseline-medium': true;
    'ui-small-medium': true;
    tiny: true;
    micro: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
  }
}

export default function Typography(theme: Theme) {
  const rootStyle = (ownerState: TypographyProps) => {
    const errorVariant = ownerState.variant === 'error';

    const colorStyle = {
      color: theme.palette.common.white,
    };

    const defaultStyle = {
      fontFamily: theme.typography.fontFamily,
      ...(errorVariant && {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        ...theme.typography.caption,
      }),
    };

    return [colorStyle, defaultStyle];
  };

  const typographyOverride: Components = {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
    },
  };

  return typographyOverride;
}
