import MUIPaper, { PaperProps as MUIPaperProps } from '@mui/material/Paper';

export type PaperProps = MUIPaperProps;

export default function Paper({ ...other }: PaperProps) {
  return <MUIPaper {...other} />;
}
