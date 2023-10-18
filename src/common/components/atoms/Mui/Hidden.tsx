import MUIHidden, { HiddenProps as MUIHiddenProps } from '@mui/material/Hidden';

export type HiddenProps = MUIHiddenProps;

export default function Hidden({ ...other }: HiddenProps) {
  return <MUIHidden {...other} />;
}
