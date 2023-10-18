import MUIMenu, { MenuProps as MUIMenuProps } from '@mui/material/Menu';

export type MenuProps = MUIMenuProps;

export default function Menu({ ...other }: MenuProps) {
  return <MUIMenu {...other} />;
}
