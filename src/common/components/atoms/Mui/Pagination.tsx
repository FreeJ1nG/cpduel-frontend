import MUIPagination, {
  PaginationProps as MUIPaginationProps,
} from '@mui/material/Pagination';

export type PaginationProps = MUIPaginationProps;

export default function Pagination({ ...other }: PaginationProps) {
  return <MUIPagination {...other} />;
}
