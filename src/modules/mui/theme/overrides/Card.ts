import { Components, Theme } from '@mui/material/styles';

export default function Card(theme: Theme) {
  const cardOverride: Components = {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '16px',
        },
      },
    },
  };

  return cardOverride;
}
