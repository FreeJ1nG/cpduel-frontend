import MUISlider, { SliderProps as MUISliderProps } from '@mui/material/Slider';

export type SliderProps = MUISliderProps;

export default function Slider({ ...other }: SliderProps) {
  return <MUISlider {...other} />;
}
