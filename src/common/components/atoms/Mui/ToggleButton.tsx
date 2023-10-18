import MUIToggleButton, {
  ToggleButtonProps as MUIToggleButtonProps,
} from '@mui/material/ToggleButton';

export type ToggleButtonProps = MUIToggleButtonProps;

export default function ToggleButton({ ...other }: ToggleButtonProps) {
  return <MUIToggleButton {...other} />;
}
