import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
  TextField as WrappedTextField,
  TextFieldProps as WrappedTextFieldProps,
} from '@/common/components/atoms';

interface ExtraFormTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export type FormTextFieldProps<T extends FieldValues> = Omit<
  WrappedTextFieldProps,
  'name'
> &
  ExtraFormTextFieldProps<T>;

export default function FormTextField<T extends FieldValues>({
  name,
  control,
  helperText,
  ...other
}: FormTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Stack gap={0.5}>
          <WrappedTextField
            error={!!error}
            value={value}
            {...other}
            onChange={(event) => {
              onChange(event);
              if (other.onChange) other.onChange(event);
            }}
          />
          {error?.message ? (
            <Typography variant="tiny">{error?.message}</Typography>
          ) : (
            helperText
          )}
        </Stack>
      )}
    />
  );
}
