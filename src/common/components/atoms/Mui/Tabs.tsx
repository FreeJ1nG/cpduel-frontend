import MUITabs, { TabsProps as MUITabsProps } from '@mui/material/Tabs';

export type TabsProps = MUITabsProps;

export default function Tabs({ ...other }: TabsProps) {
  return <MUITabs {...other} />;
}
