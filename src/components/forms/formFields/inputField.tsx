import React, { memo } from 'react';
import { useController, Control } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

function InputField({
  name,
  control,

  onChange: externalOnchange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,

  ...fieldProps
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      fullWidth
      name={name}
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...fieldProps}
    />
  );
}

export default memo(InputField);
