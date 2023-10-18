import { Theme } from '@mui/material/styles';

import Accordion from './Accordion';
import Button from './Button';
import Card from './Card';
import Chip from './Chip';
import Select from './Select';
import Skeleton from './Skeleton';
import Switch from './Switch';
import Tab from './Tab';
import TextField from './TextField';
import Typography from './Typography';

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Typography(theme),
    TextField(theme),
    Select(theme),
    Skeleton(theme),
    Accordion(),
    Chip(),
    Tab(),
    Switch(theme),
    Card(theme),
  );
}
