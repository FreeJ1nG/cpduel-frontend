import MUIDialog, { DialogProps as MUIDialogProps } from '@mui/material/Dialog';

export type DialogProps = MUIDialogProps;

export default function Dialog({ ...other }: DialogProps) {
  return <MUIDialog {...other} />;
}
