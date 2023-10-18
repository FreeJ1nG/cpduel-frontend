import MUISwitch, { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export type SwitchProps = MUISwitchProps;

export default function Switch({ ...other }: SwitchProps) {
  return <MUISwitch {...other} />;
}
