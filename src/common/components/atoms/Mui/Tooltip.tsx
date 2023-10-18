import MUITooltip, {
  TooltipProps as MUITooltipProps,
} from '@mui/material/Tooltip';

export type TooltipProps = MUITooltipProps;

export default function Tooltip({ ...other }: TooltipProps) {
  return <MUITooltip {...other} />;
}
