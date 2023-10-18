import MUIDivider, {
  DividerProps as MUIDividerProps,
} from '@mui/material/Divider';

export type DividerProps = MUIDividerProps;

export default function Divider({ ...other }: DividerProps) {
  return <MUIDivider {...other} />;
}
