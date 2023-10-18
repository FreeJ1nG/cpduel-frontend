import MUIStepper, {
  StepperProps as MUIStepperProps,
} from '@mui/material/Stepper';

export type StepperProps = MUIStepperProps;

export default function Stepper({ ...other }: StepperProps) {
  return <MUIStepper {...other} />;
}
