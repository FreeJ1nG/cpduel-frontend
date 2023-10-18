import type { SelectProps } from '@mui/material/Select';
import { Components, Theme } from '@mui/material/styles';

export default function Select(theme: Theme) {
  const rootStyle = (ownerState: SelectProps) => {
    const filledVariant = ownerState.variant === 'filled';
    const isError = ownerState.error;

    const colorStyle = {
      ...(filledVariant && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        ...(isError && {
          color: theme.palette.primary.main,
        }),
      }),
    };

    return [colorStyle];
  };

  const selectOverride: Components = {
    MuiSelect: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
      },
    },
  };

  return selectOverride;
}
