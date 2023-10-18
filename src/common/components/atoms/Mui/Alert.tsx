import { forwardRef, Ref } from 'react';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';

export type AlertProps = MUIAlertProps;

function Alert({ ...other }: AlertProps, ref: Ref<HTMLDivElement>) {
  return <MUIAlert ref={ref} {...other} />;
}

export default forwardRef<HTMLDivElement, AlertProps>(Alert);
