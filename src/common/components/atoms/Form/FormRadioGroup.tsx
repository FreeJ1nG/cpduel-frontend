import { OptionProps } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import {
  Radio as WrappedRadio,
  RadioGroup as WrappedRadioGroup,
  RadioGroupProps as WrappedRadioGroupProps,
  Stack,
  Typography,
} from '@/common/components/atoms';

interface ExtraFormRadioGroupProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: Array<OptionProps>;
  label: string;
}

export type FormRadioGroupProps = WrappedRadioGroupProps &
  ExtraFormRadioGroupProps<FieldValues>;

export default function FormRadioGroup<T extends FieldValues>({
  name,
  control,
  label,
  options,
  ...other
}: WrappedRadioGroupProps & ExtraFormRadioGroupProps<T>) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Stack gap={0.5}>
            <WrappedRadioGroup value={value} onChange={onChange} {...other}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  control={<WrappedRadio />}
                />
              ))}
            </WrappedRadioGroup>
            <Typography variant="error">{error?.message}</Typography>
          </Stack>
        )}
      />
    </FormControl>
  );
}
