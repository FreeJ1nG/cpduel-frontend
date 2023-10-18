import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MUIButtonProps {
  rounded?: boolean;
}

export default function Button({ rounded, ...other }: ButtonProps) {
  return (
    <MUIButton
      sx={{ ...(rounded && { borderRadius: '24px' }), ...other.sx }}
      {...other}
    />
  );
}
