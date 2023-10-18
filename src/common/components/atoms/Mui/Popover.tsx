import MUIPopover, {
  PopoverProps as MUIPopoverProps,
} from '@mui/material/Popover';

export type PopoverProps = MUIPopoverProps;

export default function Popover({ ...other }: PopoverProps) {
  return <MUIPopover {...other} />;
}
