import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

export type LinkProps = MUILinkProps;

export default function Link({ ...other }: LinkProps) {
  return <MUILink {...other} />;
}
