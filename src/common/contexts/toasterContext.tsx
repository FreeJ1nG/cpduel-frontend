import {
  ChildrenProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AlertColor } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';

import Alert from '@/common/components/atoms/Mui/Alert';
import Snackbar from '@/common/components/atoms/Mui/Snackbar';

export interface SnackbarMessage {
  message: string | undefined;
  key: number;
}

export interface ToasterConfig {
  origin?: SnackbarOrigin;
  duration?: number;
  color: AlertColor;
  message: string;
}

interface IToasterContext {
  setConfig: (config: ToasterConfig) => void;
}

const ToasterContext = createContext<IToasterContext>({
  setConfig: () => {},
});

export function ToasterContextProvider({ children }: ChildrenProps) {
  const defaultOrigin = useMemo<SnackbarOrigin>(
    () => ({ vertical: 'bottom', horizontal: 'left' }),
    [],
  );
  const defaultDuration = 5000;
  const defaultColor = 'success';

  const [origin, setOrigin] = useState<SnackbarOrigin>({
    vertical: 'bottom',
    horizontal: 'left',
  });
  const [duration, setDuration] = useState<number>(defaultDuration);
  const [color, setColor] = useState<AlertColor>(defaultColor);
  const [message, setMessage] = useState<SnackbarMessage | undefined>(
    undefined,
  );
  const [open, setOpen] = useState<boolean>(false);
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);

  const setConfig = useCallback(
    (config: ToasterConfig) => {
      if (config.origin) setOrigin(config.origin);
      else setOrigin(defaultOrigin);

      if (config.duration) setDuration(config.duration);
      else setDuration(defaultDuration);

      if (config.color) setColor(config.color);
      else setColor(defaultColor);

      if (config.message) {
        setSnackPack((prev) => [
          ...prev,
          { message: config.message, key: new Date().getTime() },
        ]);
      } else setMessage(undefined);
    },
    [defaultOrigin],
  );

  const handleClose = useCallback(
    (_: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') return;
      setOpen(false);
    },
    [],
  );

  const handleExited = useCallback(() => setMessage(undefined), []);

  useEffect(() => {
    if (snackPack.length && !message) {
      // Set a new snack when we don't have an active one
      setMessage({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && message && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, message, open]);

  const toasterContextProviderValue = useMemo(
    () => ({
      setConfig,
    }),
    [setConfig],
  );

  return (
    <ToasterContext.Provider value={toasterContextProviderValue}>
      <Snackbar
        key={message ? message.key : undefined}
        open={open}
        onClose={handleClose}
        autoHideDuration={duration}
        anchorOrigin={origin}
        TransitionProps={{ onExited: handleExited }}
        color={color}
      >
        <Alert severity={color}>{message?.message}</Alert>
      </Snackbar>
      {children}
    </ToasterContext.Provider>
  );
}

export const useToasterContext = () => {
  return useContext(ToasterContext);
};
