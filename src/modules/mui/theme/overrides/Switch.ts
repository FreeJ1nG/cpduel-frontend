import { Components, Theme } from '@mui/material/styles';

export default function Switch(theme: Theme) {
  const switchOverride: Components = {
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: theme.palette.common.white,
        },
      },
    },
  };

  return switchOverride;
}
