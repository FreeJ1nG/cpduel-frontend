import { Components, Theme } from '@mui/material/styles';

import { TextFieldProps } from '@/common/components/atoms';

const COLORS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;

export default function TextField(theme: Theme) {
  const rootStyle = (ownerState: TextFieldProps) => {
    // const outlinedVariant = ownerState.variant === 'outlined';
    const filledVariant = ownerState.variant === 'filled';
    // const standardVariant = ownerState.variant === 'standard';
    const isError = ownerState.error;

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        ...(filledVariant && {
          backgroundColor: theme.palette.secondary.main,
          ...(isError && {
            color: theme.palette.primary.main,
          }),
        }),
      }),
    }));

    const defaultStyle = {
      input: {
        '&:-webkit-autofill': {
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: '#fff',
          caretColor: '#fff',
        },
      },
    };

    return [...colorStyle, defaultStyle];
  };

  const textFieldOverride: Components = {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
      defaultProps: {
        size: 'medium',
      },
    },
  };

  return textFieldOverride;
}
