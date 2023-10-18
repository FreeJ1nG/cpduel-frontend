import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = MUIAppBarProps;

export default function AppBar({ ...other }: AppBarProps) {
  return <MUIAppBar {...other} />;
}
