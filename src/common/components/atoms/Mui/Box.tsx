import MUIBox, { BoxProps as MUIBoxProps } from '@mui/material/Box';

export type BoxProps = MUIBoxProps;

export default function Box({ ...other }: BoxProps) {
  return <MUIBox {...other} />;
}
