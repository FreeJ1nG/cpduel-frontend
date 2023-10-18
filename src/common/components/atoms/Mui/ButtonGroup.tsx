import MUIButtonGroup, {
  ButtonGroupProps as MUIButtonGroupProps,
} from '@mui/material/ButtonGroup';

export type ButtonGroupProps = MUIButtonGroupProps;

export default function ButtonGroup({ ...other }: ButtonGroupProps) {
  return <MUIButtonGroup {...other} />;
}
