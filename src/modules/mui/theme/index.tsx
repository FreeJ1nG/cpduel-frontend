import { ChildrenProps, useMemo } from 'react';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

import { useSettingsContext } from '@/common/contexts/settingsContext/settingContext';
import customShadows from '@/modules/mui/theme/customShadows';
import GlobalStyles from '@/modules/mui/theme/globalStyles';
import componentOverrides from '@/modules/mui/theme/overrides';
import palette from '@/modules/mui/theme/palette';
import shadows from '@/modules/mui/theme/shadows';
import typography from '@/modules/mui/theme/typography';

export default function ThemeProvider({ children }: ChildrenProps) {
  const { themeMode } = useSettingsContext();
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      shape: { borderRadius: 8 },
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
      typography,
    }),
    [themeMode],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
