import MUIAccordion, {
  AccordionProps as MUIAccordionProps,
} from '@mui/material/Accordion';

export type AccordionProps = MUIAccordionProps;

export default function Accordion({ ...other }: AccordionProps) {
  return <MUIAccordion {...other} />;
}
