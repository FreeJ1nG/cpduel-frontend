import MUIContainer, {
  ContainerProps as MUIContainerProps,
} from '@mui/material/Container';

export type ContainerProps = MUIContainerProps;

export default function Container({ ...other }: ContainerProps) {
  return <MUIContainer {...other} />;
}
