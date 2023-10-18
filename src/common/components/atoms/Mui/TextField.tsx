import {
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Edit, Save } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MUITextField, {
  TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField';

import { LoadingComponent } from '@/common/components/atoms';
import useToaster from '@/common/hooks/useToaster';

interface ExtraTextFieldProps {
  onSave?: (newValue: unknown) => Promise<unknown>;
  saveCleanup?: () => void;
  isSaving?: boolean;
  isEditable?: boolean;
  editableInput?: boolean;
  disableFocusEffect?: boolean;
}

export type TextFieldProps = MUITextFieldProps & ExtraTextFieldProps;

export default function TextField({
  variant,
  name,
  type,
  value,
  isSaving,
  saveCleanup,
  onSave = () => new Promise(() => {}),
  isEditable = false,
  editableInput = false,
  disableFocusEffect,
  onFocus,
  onBlur,
  ...other
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const toaster = useToaster();
  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [editableState, setEditableState] = useState<boolean>(false);

  useEffect(() => {
    setEditableState(isEditable ?? false);
  }, [isEditable]);

  useEffect(() => {
    if (editableState && editableInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editableState, editableInput]);

  const overrideType = useMemo(() => {
    if (type !== 'password') return type;
    return showPassword ? 'text' : 'password';
  }, [type, showPassword]);

  const handleClickShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword],
  );

  const handleToggleEditable = useCallback(async () => {
    if (editableState) {
      await onSave(value)
        .then(() =>
          toaster.launch({
            color: 'success',
            message: 'Full name updated successfully!',
          }),
        )
        .catch((err) =>
          toaster.launch({
            color: 'error',
            message: err.data.error,
          }),
        );
      if (saveCleanup) saveCleanup();
    }
    setEditableState(!editableState);
  }, [editableState, onSave, saveCleanup, toaster, value]);

  const preventDefaultEventHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    [],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
      setFocused(true);
      if (onFocus) onFocus(event);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
      setFocused(false);
      if (onBlur) onBlur(event);
    },
    [onBlur],
  );

  return (
    <MUITextField
      inputRef={inputRef}
      variant={variant}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={overrideType}
      sx={{
        ...(variant === 'filled' && {
          borderRadius: focused ? '8px 8px 0 0' : '8px',
        }),
        ...other.sx,
      }}
      InputProps={{
        ...(editableInput && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleToggleEditable}
                onMouseDown={preventDefaultEventHandler}
                onMouseUp={preventDefaultEventHandler}
                edge="end"
              >
                {editableState ? (
                  <LoadingComponent
                    isLoading={isSaving}
                    loadingComponent={<CircularProgress size={28} />}
                  >
                    <Save color="primary" />
                  </LoadingComponent>
                ) : (
                  <Edit color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }),
        ...(type === 'password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={preventDefaultEventHandler}
                onMouseUp={preventDefaultEventHandler}
                edge="end"
              >
                {showPassword ? (
                  <Visibility color="primary" />
                ) : (
                  <VisibilityOff color="primary" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }),
        ...other.InputProps,
      }}
      disabled={(editableInput && !editableState) || other.disabled}
      value={value}
      {...other}
    />
  );
}
