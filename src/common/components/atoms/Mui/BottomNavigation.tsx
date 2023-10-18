import MUIBottomNavigation, {
  BottomNavigationProps as MUIBottomNavigationProps,
} from '@mui/material/BottomNavigation';

export type BottomNavigationProps = MUIBottomNavigationProps;

export default function BottomNavigation({ ...other }: BottomNavigationProps) {
  return <MUIBottomNavigation {...other} />;
}
