import MUITable, { TableProps as MUITableProps } from '@mui/material/Table';

export type TableProps = MUITableProps;

export default function Table({ ...other }: TableProps) {
  return <MUITable {...other} />;
}
