import MUICheckbox, {
  CheckboxProps as MUICheckboxProps,
} from '@mui/material/Checkbox';

export type CheckboxProps = MUICheckboxProps;

export default function Checkbox({ ...other }: CheckboxProps) {
  return <MUICheckbox {...other} />;
}
