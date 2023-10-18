import { useMemo } from 'react';
import MUITypography, {
  TypographyProps as MUITypographyProps,
} from '@mui/material/Typography';

import { FONT_GRIM_GHOST, FONT_OCTIN_VINTAGE } from '@/fonts';

export interface TypographyProps extends MUITypographyProps {
  octinVintage?: boolean;
  grimGhost?: boolean;
}

export default function Typography({
  octinVintage,
  grimGhost,
  ...other
}: TypographyProps) {
  const fontSettings = useMemo(() => {
    if (octinVintage) {
      return FONT_OCTIN_VINTAGE;
    }
    if (grimGhost) {
      return FONT_GRIM_GHOST;
    }
    return undefined;
  }, [octinVintage, grimGhost]);
  return (
    <MUITypography
      fontFamily={fontSettings?.style.fontFamily}
      fontStyle={fontSettings?.style.fontStyle}
      {...other}
    />
  );
}
