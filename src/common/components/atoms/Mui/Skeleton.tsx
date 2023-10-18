import MUISkeleton, {
  SkeletonProps as MUISkeletonProps,
} from '@mui/material/Skeleton';

export type SkeletonProps = MUISkeletonProps;

export default function Skeleton({ ...other }: SkeletonProps) {
  return <MUISkeleton {...other} />;
}
