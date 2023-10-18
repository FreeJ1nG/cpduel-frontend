import MUIBadge, { BadgeProps as MUIBadgeProps } from '@mui/material/Badge';

export type BadgeProps = MUIBadgeProps;

export default function Badge({ ...other }: BadgeProps) {
  return <MUIBadge {...other} />;
}
