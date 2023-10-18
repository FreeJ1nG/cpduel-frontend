import MUIChip, { ChipProps as MUIChipProps } from '@mui/material/Chip';

export type ChipProps = MUIChipProps;

export default function Chip({ ...other }: ChipProps) {
  return <MUIChip {...other} />;
}
