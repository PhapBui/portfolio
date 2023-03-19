import { TextField } from '@mui/material';
import React, { InputHTMLAttributes, memo } from 'react';
import { Control, useController } from 'react-hook-form';
export interface TextAreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  control: Control<any>;
  label?: string;
  rows?: number;
}

function TextAreaField({ name, control, label, rows, ...inputProps }: TextAreaFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      rows={rows}
      fullWidth
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="outlined"
      placeholder={label}
      multiline
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}

export default memo(TextAreaField);
