import MUICard, { CardProps as MUICardProps } from '@mui/material/Card';

export type CardProps = MUICardProps;

export default function Card({ ...other }: CardProps) {
  return <MUICard {...other} />;
}
