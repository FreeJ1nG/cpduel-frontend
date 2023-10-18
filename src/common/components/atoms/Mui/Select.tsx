import { useState } from 'react';
import MUISelect, { SelectProps as MUISelectProps } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';

export type SelectProps = MUISelectProps;

export default function Select({ variant, ...other }: SelectProps) {
  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <MUISelect
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      variant={variant}
      {...other}
      sx={{
        ...(variant === 'filled' && {
          bgcolor: focused
            ? theme.palette.secondary.main
            : theme.palette.secondary.main,
        }),
        ...other.sx,
      }}
    />
  );
}
