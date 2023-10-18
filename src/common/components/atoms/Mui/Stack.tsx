import { forwardRef, Ref } from 'react';
import MUIStack, { StackProps as MUIStackProps } from '@mui/material/Stack';

export type StackProps = MUIStackProps;

function Stack({ ...other }: StackProps, ref: Ref<HTMLDivElement>) {
  return <MUIStack {...other} ref={ref} />;
}

export default forwardRef<HTMLDivElement, StackProps>(Stack);
