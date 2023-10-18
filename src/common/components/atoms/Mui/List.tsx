import MUIList, { ListProps as MUIListProps } from '@mui/material/List';

export type ListProps = MUIListProps;

export default function List({ ...other }: ListProps) {
  return <MUIList {...other} />;
}
