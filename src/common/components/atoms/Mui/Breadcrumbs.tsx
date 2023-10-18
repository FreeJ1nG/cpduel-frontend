import MUIBreadcrumbs, {
  BreadcrumbsProps as MUIBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';

export type BreadcrumbsProps = MUIBreadcrumbsProps;

export default function Breadcrumbs({ ...other }: BreadcrumbsProps) {
  return <MUIBreadcrumbs {...other} />;
}
