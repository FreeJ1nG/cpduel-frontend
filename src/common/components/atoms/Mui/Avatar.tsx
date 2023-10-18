import MUIAvatar, { AvatarProps as MUIAvatarProps } from '@mui/material/Avatar';

export type AvatarProps = MUIAvatarProps;

export default function Avatar({ ...other }: AvatarProps) {
  return <MUIAvatar {...other} />;
}
