import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Cookies from 'js-cookie';

import { defaultSettings } from '@/common/contexts/settingsContext/config';
import {
  defaultPreset,
  getPresets,
  presetsOption,
} from '@/common/contexts/settingsContext/presets';
import {
  SettingsContextProps,
  ThemeColorPresetsValue,
  ThemeModeValue,
} from '@/common/contexts/settingsContext/types';

// ----------------------------------------------------------------------

function getCookie(name: string) {
  return Cookies.get(name);
}

function setCookie(name: string, value: string) {
  Cookies.set(name, value);
}

function removeCookie(name: string) {
  Cookies.remove(name);
}

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},
  // Color
  onChangeColorPresets: () => {},
  presetsColor: defaultPreset,
  presetsOption: [],
  onResetSetting: () => {},
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [themeMode, setThemeMode] = useState(defaultSettings.themeMode);
  const [themeColorPresets, setThemeColorPresets] = useState(
    defaultSettings.themeColorPresets,
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mode = getCookie('themeMode') || defaultSettings.themeMode;
      const colorPresets =
        getCookie('themeColorPresets') || defaultSettings.themeColorPresets;

      setThemeMode(mode as ThemeModeValue);
      setThemeColorPresets(colorPresets as ThemeColorPresetsValue);
    }
  }, []);

  // Mode

  const onToggleMode = useCallback(() => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(value);
    setCookie('themeMode', value);
  }, [themeMode]);

  const onChangeMode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as ThemeModeValue;
      setThemeMode(value);
      setCookie('themeMode', value);
    },
    [],
  );

  // Color
  const onChangeColorPresets = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as ThemeColorPresetsValue;
      setThemeColorPresets(value);
      setCookie('themeColorPresets', value);
    },
    [],
  );

  // Reset
  const onResetSetting = useCallback(() => {
    setThemeMode(defaultSettings.themeMode);
    setThemeColorPresets(defaultSettings.themeColorPresets);
    removeCookie('themeMode');
    removeCookie('themeColorPresets');
  }, []);

  const value = useMemo(
    () => ({
      // Mode
      themeMode,
      onToggleMode,
      onChangeMode,
      // Color
      themeColorPresets,
      onChangeColorPresets,
      presetsOption,
      presetsColor: getPresets(themeColorPresets),
      // Reset
      onResetSetting,
    }),
    [
      themeMode,
      onToggleMode,
      onChangeMode,
      themeColorPresets,
      onChangeColorPresets,
      onResetSetting,
    ],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
