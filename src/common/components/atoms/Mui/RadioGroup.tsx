import MUIRadioGroup, {
  RadioGroupProps as MUIRadioGroupProps,
} from '@mui/material/RadioGroup';

export type RadioGroupProps = MUIRadioGroupProps;

export default function RadioGroup({ ...other }: RadioGroupProps) {
  return <MUIRadioGroup {...other} />;
}
