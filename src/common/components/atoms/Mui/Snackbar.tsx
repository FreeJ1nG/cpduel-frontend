import MUISnackbar, {
  SnackbarProps as MUISnackbarProps,
} from '@mui/material/Snackbar';

export type SnackbarProps = MUISnackbarProps;

export default function Snackbar({ ...other }: SnackbarProps) {
  return <MUISnackbar {...other} />;
}
