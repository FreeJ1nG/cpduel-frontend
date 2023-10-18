import { ChipProps } from '@mui/material/Chip';
import { Components } from '@mui/material/styles';

export default function Chip() {
  const rootStyle = (ownerState: ChipProps) => {
    const smallSize = ownerState.size === 'small';
    const mediumSize = ownerState.size === 'medium';

    const size = {
      ...(smallSize && {
        height: 18,
        padding: '0 6px',
        paddingBottom: '2px',
        fontSize: 12,
      }),
      ...(mediumSize && {
        height: 24,
        padding: '4px 10px',
        fontSize: 14,
      }),
    };

    return [size];
  };

  const chipOverride: Components = {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyle(ownerState),
        label: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  };

  return chipOverride;
}
