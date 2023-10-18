import MUIRadio, { RadioProps as MUIRadioProps } from '@mui/material/Radio';

export type RadioProps = MUIRadioProps;

export default function Radio({ ...other }: RadioProps) {
  return <MUIRadio {...other} />;
}
