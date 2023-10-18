import { alpha, Components, Theme } from '@mui/material/styles';

import { ButtonProps } from '@/common/components/atoms';

const COLORS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true;
    soft: true;
  }
  interface ButtonPropsSizeOverrides {
    icon: true;
  }
}

export default function Button(theme: Theme) {
  const rootStyle = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const secondaryColor = ownerState.color === 'secondary';

    const containedVariant = ownerState.variant === 'contained';

    const secondaryVariant = ownerState.variant === 'secondary';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const softVariant = ownerState.variant === 'soft';

    const smallSize = ownerState.size === 'small';

    const largeSize = ownerState.size === 'large';

    const iconSize = ownerState.size === 'icon';

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        ...(containedVariant && {
          backgroundColor: theme.palette[ownerState.color].main,
          color: theme.palette.common.white,
          boxShadow: theme.customShadows[ownerState.color],
          '&:hover': {
            boxShadow: theme.customShadows[ownerState.color],
            backgroundColor: theme.palette[ownerState.color].light,
          },
        }),
        ...(outlinedVariant && {
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          '&:hover': {
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: alpha(theme.palette.primary.main, 0.18),
          },
          '&:disabled': {
            border: `2px solid ${theme.palette.common.white}`,
            color: theme.palette.common.white,
          },
        }),
        ...(secondaryVariant && {
          backgroundColor: theme.palette.common.black,
          boxShadow: theme.customShadows.secondary,
          color: theme.palette.common.white,
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[900],
          },
        }),
        ...(softVariant && {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.common.white,
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
      }),
    }));

    const defaultStyle = {
      fontWeight: 600,
      borderRadius: '12px',
      ...(secondaryColor && {
        color: theme.palette.common.white,
      }),
      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: ownerState.color,
        }),
        // OUTLINED
        ...(outlinedVariant && {}),
        // TEXT
        ...(textVariant && {}),
      }),
    };

    const size = {
      ...(smallSize && {
        height: 30,
        fontSize: 13,
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
      }),
      ...(iconSize && {
        minWidth: 'auto',
        height: 40,
      }),
    };

    return [...colorStyle, defaultStyle, size];
  };

  const buttonOverride: Components = {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
    },
  };

  return buttonOverride;
}
