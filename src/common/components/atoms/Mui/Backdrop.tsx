import MUIBackdrop, {
  BackdropProps as MUIBackdropProps,
} from '@mui/material/Backdrop';

export type BackdropProps = MUIBackdropProps;

export default function Backdrop({ ...other }: BackdropProps) {
  return <MUIBackdrop {...other} />;
}
