import MUIRating, { RatingProps as MUIRatingProps } from '@mui/material/Rating';

export type RatingProps = MUIRatingProps;

export default function Rating({ ...other }: RatingProps) {
  return <MUIRating {...other} />;
}
