import MUIDrawer, { DrawerProps as MUIDrawerProps } from '@mui/material/Drawer';

export type DrawerProps = MUIDrawerProps;

export default function Drawer({ ...other }: DrawerProps) {
  return <MUIDrawer {...other} />;
}
