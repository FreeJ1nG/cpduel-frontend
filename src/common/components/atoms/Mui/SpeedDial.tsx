import MUISpeedDial, {
  SpeedDialProps as MUISpeedDialProps,
} from '@mui/material/SpeedDial';

export type SpeedDialProps = MUISpeedDialProps;

export default function SpeedDial({ ...other }: SpeedDialProps) {
  return <MUISpeedDial {...other} />;
}
