import MUIGrid, { GridProps as MUIGridProps } from '@mui/material/Grid';

export type GridProps = MUIGridProps;

export default function Grid({ ...other }: GridProps) {
  return <MUIGrid {...other} />;
}
