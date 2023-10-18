import { Components } from '@mui/material/styles';

export default function Tab() {
  const rootStyle = () => {
    const defaultStyle = {
      fontWeight: 600,
    };
    return [defaultStyle];
  };

  const tabOverride: Components = {
    MuiTab: {
      styleOverrides: {
        root: () => rootStyle(),
      },
    },
  };

  return tabOverride;
}
