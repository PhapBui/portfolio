import { memo } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { Control, useController } from 'react-hook-form';

export interface SelectOptions {
  label?: string;
  value: number | string;
}

export type SelectFieldProps = SelectProps<SelectOptions> & {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOptions[];
};

function SelectField({
  name,
  control,
  label,
  disabled,
  options,

  onChange: externalOnchange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,

  ...fieldProps
}: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl
      disabled={disabled}
      margin="normal"
      error={invalid}
      fullWidth
      size="small"
      variant="outlined"
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        placeholder={label}
        label={label}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...fieldProps}
      >
        {options.map((option) => (
          <MenuItem
            value={option.value}
            key={option.value}
            disabled={!!!option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}

export default memo(SelectField);
