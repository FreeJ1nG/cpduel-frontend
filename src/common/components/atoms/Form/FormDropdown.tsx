import { OptionProps } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import {
  Stack,
  TextField as WrappedTextField,
  TextFieldProps as WrappedTextFieldProps,
  Typography,
} from '@/common/components/atoms';

interface ExtraFormDropdownProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: Array<OptionProps>;
}

export type FormDropdownProps = WrappedTextFieldProps &
  ExtraFormDropdownProps<FieldValues>;

export default function FormDropdown<T extends FieldValues>({
  name,
  control,
  options,
  ...other
}: WrappedTextFieldProps & ExtraFormDropdownProps<T>) {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Stack gap={0.5}>
            <WrappedTextField
              onChange={onChange}
              value={value}
              select
              {...other}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </WrappedTextField>
            <Typography variant="error">{error?.message}</Typography>
          </Stack>
        )}
      />
    </FormControl>
  );
}
