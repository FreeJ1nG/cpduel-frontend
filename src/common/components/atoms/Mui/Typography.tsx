import MUITypography, {
  TypographyProps as MUITypographyProps,
} from '@mui/material/Typography';

export interface TypographyProps extends MUITypographyProps {
  octinVintage?: boolean;
  grimGhost?: boolean;
}

export default function Typography({
  octinVintage,
  grimGhost,
  ...other
}: TypographyProps) {
  return <MUITypography {...other} />;
}
