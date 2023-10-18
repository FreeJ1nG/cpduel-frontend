import { Components, Theme } from '@mui/material/styles';

export default function Skeleton(theme: Theme) {
  const rootStyle = () => {
    const colorStyle = {
      backgroundColor: theme.palette.grey[700],
    };

    return [colorStyle];
  };

  const skeletonOverride: Components = {
    MuiSkeleton: {
      styleOverrides: {
        root: () => rootStyle(),
      },
    },
  };

  return skeletonOverride;
}
