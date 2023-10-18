import MUIPopper, { PopperProps as MUIPopperProps } from '@mui/material/Popper';

export type PopperProps = MUIPopperProps;

export default function Popper({ ...other }: PopperProps) {
  return <MUIPopper {...other} />;
}
