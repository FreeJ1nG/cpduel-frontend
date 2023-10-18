import { Components } from '@mui/material/styles';

export default function Accordion() {
  const accordionOverride: Components = {
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          minHeight: '48px !important',
        },
        expanded: {
          margin: 0,
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };

  return accordionOverride;
}
