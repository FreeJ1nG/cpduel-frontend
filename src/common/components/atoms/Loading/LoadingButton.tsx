import MUILoadingButton, {
  LoadingButtonProps as MUILoadingButtonProps,
} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = MUILoadingButtonProps;

export default function LoadingButton({ ...other }: MUILoadingButtonProps) {
  return <MUILoadingButton {...other} />;
}
