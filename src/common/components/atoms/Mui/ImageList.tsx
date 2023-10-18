import MUIImageList, {
  ImageListProps as MUIImageListProps,
} from '@mui/material/ImageList';

export type ImageListProps = MUIImageListProps;

export default function ImageList({ ...other }: ImageListProps) {
  return <MUIImageList {...other} />;
}
