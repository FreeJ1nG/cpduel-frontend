import { Provider as ReduxProvider } from 'react-redux';
import type { AppProps } from 'next/app';

import { AuthContextProvider } from '@/common/contexts/authContext';
import { SettingsProvider } from '@/common/contexts/settingsContext/settingContext';
import { ToasterContextProvider } from '@/common/contexts/toasterContext';
import ThemeProvider from '@/modules/mui/theme';
import store from '@/modules/redux/store';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <ReduxProvider store={store}>
          <ToasterContextProvider>
            <AuthContextProvider>
              <Component {...pageProps} />
            </AuthContextProvider>
          </ToasterContextProvider>
        </ReduxProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}
